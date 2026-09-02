# Modelling and Epistemic Operationalization

> A framework for rendering epistemic practice intelligible and systematically enhancing epistemic capacity.

## Working On

- How to take 'Bremontix Ars' and extract - the concepts and add them to our dataset.
- ...

## Deployment

The app is published as a Docker image on GHCR (`ghcr.io/dbremont/epistemica:latest`), built automatically by GitHub Actions on every push to `main`.

### Prerequisites

- Docker
- A running CouchDB instance (default: `http://127.0.0.1:5984`)
  - e.g. `docker run -d --name couchdb --restart unless-stopped --network host -e COUCHDB_USER=... -e COUCHDB_PASSWORD=... couchdb:latest`

### Setup

1. Create a `.env` file in the repo root (read by the server via `bin/envutil.py`):

   ```sh
   COUCHDB_URL=http://127.0.0.1:5984
   COUCHDB_DB=epistemica
   COUCHDB_USER=...
   COUCHDB_PASSWORD=...
   ```

2. Initialize CouchDB once (CORS + database creation) and seed the graph data:

   ```sh
   python3 bin/couchdb_setup.py
   python3 bin/seed_couchdb.py
   ```

3. Precompute the graph layout:

   ```sh
   python3 bin/layout.py
   ```

   Run it again whenever `app/data/data.json` changes. The result is stored in
   both the CouchDB `layout` doc (primary, served via `GET /api/layout`) and
   the static `app/data/layout.json` (fallback). `--no-db` writes the file
   only; `--source file` reads nodes from `data.json` instead of CouchDB. The
   renderers read positions once at load and keep the graph static — no live
   force simulation.

4. Run `./deploy.sh` — it pulls the latest image from GHCR and starts the container with `--network host`, mounting `.env` into it.

   The port defaults to **8010**; override with `EPISTEMICA_PORT=<port> ./deploy.sh`.

### Usage

Once deployed, open <http://localhost:8010>.

- App: `http://localhost:8010/index.html`
- Health check: `GET http://localhost:8010/api/health`
- Precomputed graph layout: `GET http://localhost:8010/api/layout` (`X-Layout-Source` header reports `db` or `file`)
- Graph save endpoint (set in editor Settings → "Backend Sync" → "Backend Save URL"): `POST http://localhost:8010/api/graph/save`

## References

- [Affirmation Space](https://www.notion.so/Affirmation-Space-336c0f5171ec80928f75ddbde09d7121?source=copy_link)
- [Modelling Modelling](https://www.notion.so/Framework-334c0f5171ec803e8cfbe7f0bc02c575?source=copy_link)
- [Algorithms](ttps://github.com/dbremont/algorithms)
