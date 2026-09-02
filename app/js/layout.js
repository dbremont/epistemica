/*
 * Precomputed layout access for the Epistemica renderer (graph.html / edit.html).
 *
 * bin/layout.py precomputes node positions and stores them in BOTH stores:
 * the CouchDB 'layout' doc (primary, served by bin/sync.py GET /api/layout)
 * and the static app/data/layout.json (fallback).
 *
 * loadLayout() tries api/layout first, then the static file; it resolves to
 * a { nodeId: [x, y] } map, or null when nothing loads (callers then fall
 * back to their built-in dynamic layout).
 */
(function (global) {
    'use strict';

    function looksLikePositionMap(body) {
        if (!body || typeof body !== 'object' || Array.isArray(body)) return false;
        for (var k in body) {
            var p = body[k];
            if (Array.isArray(p) && p.length === 2 &&
                typeof p[0] === 'number' && typeof p[1] === 'number') return true;
        }
        return false;
    }

    async function loadLayout() {
        var urls = ['api/layout', 'data/layout.json'];
        for (var i = 0; i < urls.length; i++) {
            try {
                var res = await fetch(urls[i], { headers: { 'Accept': 'application/json' } });
                if (res.ok) {
                    var body = await res.json();
                    if (looksLikePositionMap(body)) return body;
                }
            } catch (e) { /* try next source */ }
        }
        return null;
    }

    global.LayoutData = { loadLayout: loadLayout };
})(window);
