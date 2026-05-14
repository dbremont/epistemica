# Parse and Extract the Conceptual Structure Typing Epistemic Practice

> Let's extract from the target document following the followign, rules, partial extraction work, the concets that drives, unerlies, renders intelligible the epistemic practice of agents.

> Epistemic practice can be characterized as the structured process by which an observer acquires, encodes, transforms, validates, and applies epistemic artifacts about a target domain.

> For each concept extracted - used the rules to filter it.

## Goal Set

- To construct a rigorous, domain-general conceptual structure taxonomy that formally characterizes epistemic practice as a structured system of knowledge acquisition, encoding, transformation, validation, and application—independent of any specific computational tooling implementation.
- Relational Ontology Goal: Construct a comprehensive edge-type framework that captures all structural, operational, normative, dynamic, and infrastructural relations within epistemic practice.
- Knowledge Systems Modeling Goal: Provide a formal foundation for modeling how epistemic agents and institutions generate, maintain, and evolve knowledge.
- To systematically learn from other epistemic agents by modeling how they parse, represent, validate, critique, correct, and refine artifacts that refer to reality.
- Study tools, and mechanisms, and other dimenios to be a better epistemic agent.
- To develop structured methods for detecting epistemic failure modes such as bias, distortion, uncertainty, invalid inference, and representational limitations.
- To identify and formalize best practices for observation, inference, validation, and knowledge correction across disciplines.
- To study epistemic tools, reasoning mechanisms, methodological frameworks, and cognitive strategies in order to improve epistemic performance.
- To master core epistemic tool set domains including mathematics, logic, statistics, computation, scientific methodology, systems theory, modeling, simulation, measurement science, and domain-specific analytical frameworks in order to maximize epistemic capability.
- Note: That epistemic artifact (are description of the world) - they are not parametrized description - but descriptions - that can be valiaded - not a theoretical tool Structural Causal Model (SCM) is a artifact but Structural Caussaling Modelling is the tool toolset.

## Formulation

> Which are the sets of concept that characterize  epistemic practice? How to capture all of this concept in a database?

| **Category** | **Description** | **Instance(s)** |
| --- | --- | --- |
| **Reality** | The ontological substrate comprising the actual states, structures, processes, entities, and causal dynamics that exist independently (or partially independently) of any observer’s representation. Reality constitutes the ultimate source domain from which observations are extracted, against which epistemic artifacts are validated, and whose structure constrains possible knowledge. It includes both observable and unobservable phenomena, latent mechanisms, causal architectures, and state trajectories across time. | Physical systems, biological organisms, chemical reactions, social institutions, computational systems, economic systems, ecological networks, latent variables, hidden causal mechanisms, dynamical state spaces, material processes, environmental structures. |
| **Observation Interface & Recoding** | The sensorimotor boundary + inscription process that transduces a Domain Snapshot into a persistent encoded artifact. Includes transduction, sampling, quantization, encoding, and storage. | CMOS sensor + ADC + JPEG + SD card; thermocouple + data logger + CSV file; human retina + V1 cortex + working memory. |
|  **Concrete Epistemic Artifact** | Structured object and **specific object** that encodes claims, constraints, or distributions over reality; the primary carrier of semantic content. | ***Zero free parameters**** – every coefficient, distribution, variable, and functional form is concretely specified. | Yes – can be evaluated as correct/incorrect against reality. | `y = 2.3x + 1.7` (fitted linear model); specific CSV file `[2.1, 3.4, 5.6]`; a particular DAG with all edges and functional forms fixed. - Propositions, numbers, datasets, differential equations, probabilistic models, Hypergraphs, property encoding, |
| **Epistemic Blueprint** | Encoding format or substrate in which artifacts are expressed; constrains manipulation and interpretation. | Directed Acyclic Graph (DAG), Structural Equation (functional notation), Polynomial Equation, … |
| **Epistemic Agent** | Entity that performs epistemic operations by applying tools to artifacts. | Scientist, analyst, research institution, machine learning system, automated pipeline |
| **Epistemic Process (Activity)** | Ordered sequence of tool applications over time; defines the dynamics of knowledge construction. | Scientific method, Bayesian updating loop, training pipeline, experimental cycle |
| **Epistemic Standard** | Normative criteria used to evaluate validity, correctness, or acceptability of artifacts and processes. | Logical consistency, statistical significance, reproducibility, robustness, falsifiability |
| **Encoding Substrate** | Segment of reality that the epistemic practice targets or models. | Physical systems, biological systems, social systems, computational systems |
| **Epistemic Constraint** | Limitation that bounds what can be known or inferred within the system. | Noise, limited data, computational complexity, identifiability issues, measurement error, ignorance, intractability, stochasticity, higher-order stochasticity, chaos, nonlinearity, uncertainty propagation, and observational limitations. |
| **Epistemic Infrastructure** | Supporting environment that enables storage, computation, measurement, and communication of artifacts. | Sensors, laboratories, software systems, databases, notebooks, scientific publications |
| **Epistemic Feedback** | Signal from reality (or from another artifact) that resists or confirms prior predictions or actions; primary driver of learning and error correction. | Prediction error (residual), unexpected observation, failed intervention, successful replication, sensor saturation, model divergence, comparison between two Domain Snapshots taken at different times. |
| **Epistemic Act** | Primitive, non‑decomposable operation performed by an agent: attending, discriminating, remembering, anticipating, intervening, comparing, observing (which invokes Observation Encoding). | Attending to a sensor reading, detecting a difference, recalling an observation, emitting a prediction, pressing a measurement probe, judging similarity, encoding a raw signal into a digital value. |
| **Epistemic Principle** | Foundational normative, structural, or strategic rule that governs how epistemic agents should construct, validate, organize, or revise knowledge. Principles shape the selection of standards, tools, and processes by defining the underlying logic of inquiry. | Empiricism, falsifiability, parsimony (Occam’s Razor), Bayesian coherence, causal reasoning, reproducibility, predictive adequacy, reductionism, systems thinking, explanatory power, measurement invariance |
| **Epistemic Strategy** | Adaptive, context-dependent planning logic that governs how epistemic agents allocate resources, sequence inquiry, navigate uncertainty, and select investigative pathways to achieve epistemic objectives under real-world constraints. Strategies operationalize principles into executable inquiry architectures by determining search order, decomposition methods, validation sequencing, exploration/exploitation balance, and intervention priorities. | Exploratory data analysis before formal modeling; hypothesis-first experimentation; reductionist decomposition; systems-level integrative analysis; sequential Bayesian updating; active learning; robustness-first validation; coarse-to-fine modeling; simulation-before-deployment; high-throughput screening; falsification-driven testing; divide-and-conquer investigation; iterative refinement; uncertainty minimization; adversarial stress testing; hierarchical model building. |
| **Epistemic Framework** | Abstract conceptual, inferential, and formal systems that structure how epistemic agents interpret observations, organize knowledge, generate explanations, and reason about reality. Frameworks define the overarching cognitive architecture within which principles, operators, and artifacts are selected and deployed. | Logic, causal inference, Bayesian reasoning, statistical reasoning, systems theory, cybernetics, information theory, mechanistic modeling, optimization theory, game theory, control theory, reductionist frameworks, complexity science, decision theory |
| **Epistemic Operator** | Formal or procedural mechanism used to construct, transform, representation form ( abstract artifact)or validate epistemic artifacts. | Algebraic manipulation, statistical inference, optimization algorithms, simulation methods, measurement procedures,  generic or abstract class of artifact or let’s called it by representational form. |
| **Meta-Epistemic Layer** | Supporting material, energetic, social, and institutional environment that enables storage, computation, measurement, and communication of artifacts over time. | Sensors (thermocouples, cameras), laboratories (clean rooms), software systems (Jupyter, Git), databases, scientific publications, power grid, funding agencies, data repositories. |

## Rules

> Use this rules to guide the process of identication of concept that drives - underlies - explain or are used the epistemic practice of agents.

| Rule                                                        | Definition (Operational Form)                                                                                                                                         | Primary Distinction Axis           |
| ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| **1. Classify by epistemic function**                       | Assign each element to a single primary epistemic role (artifact, tool, Artifact Form (Artifact Blueprint), agent, act, process, principle, standard, constraint, infrastructure, domain). | Global functional typing           |
| **2. Artifact vs Operator separation**                          | An Epistemic Artifact is a fully instantiated, truth-apt representation of a specific domain that contains zero free parameters (no placeholders, unspecified coefficients, or unbound variables) and exists as a concrete particular rather than a class, set, or schema; whereas an Epistemic Operator is a procedure, algorithm, or method that actively transforms, infers, evaluates, or produces such representations without itself being a representation. | Representation vs operation        |
| **3. Principle vs Standard separation**                     | Principle = foundational explanatory constraint; Standard = operationalized evaluative criterion derived from principles.                                             | Foundational vs normative          |
| **4. Act vs Process separation**                            | Act = atomic epistemic operation; Process = ordered composition of acts with temporal structure.                                                                      | Atomic vs composite temporality    |
| **5. Artifact form as a distinct category**                | Encoding forms are syntactic/structural systems that define representational validity but do not assert truths or perform operations.                                 | Meta-representational substrate    |
| **6. Artifact form are inert; tools are active**           | Encoding forms define valid expressions; tools execute transformations, inference, or validation over those expressions.                                              | Syntax vs computation              |
| **7. Artifact requires instantiation within Artifact Form (Artifact Blueprint)** | An artifact exists only when an encoding form is populated with domain-referential, truth-evaluable content.                                                          | Structural instantiation condition |
| **8. Domain is ontologically independent**                  | The target domain exists independently of its representations and must be identified separately from epistemic constructs.                                            | Ontology vs representation         |
| **9. Infrastructure as enabling substrate**                 | Infrastructure consists of physical/computational systems enabling epistemic operations without encoding domain content.                                              | Support vs content                 |
| **10. Constraints as epistemic limits**                     | Constraints are conditions that restrict possible states of knowledge or valid inference, not descriptive claims.                                                     | Limitation vs representation       |
| **11. Feedback as corrective mechanism**                    | Feedback is any process that evaluates and adjusts epistemic outputs based on error or deviation.                                                                     | Correction dynamics                |
| **12. Prevent category collapse (no drift)**                | An entity must not simultaneously belong to multiple primary epistemic categories under the same role.                                                                | Mutual exclusivity                 |
| **13. Explicit relational modeling required**               | All epistemic relations (causal, inferential, compositional) must be explicitly represented, not implied.                                                             | Structural explicitness            |
| **14. Structural interrogation of candidates**              | Classification requires checking decomposability, referentiality, and operational behavior.                                                                           | Validation criteria                |
| **15. Artifact requires empirical or domain grounding**     | Artifacts must refer to or model a concrete or well-defined domain state, not abstract templates.                                                                     | Grounding condition                |
| **16. Tools must transform or produce artifacts**           | A valid tool must output, modify, evaluate, or generate epistemic artifacts as its primary function.                                                                  | Operational closure                |
| **17. Artifact vs Artifact Form** | The artifact form - one it's abstract - cannot not be constrated with reality - and the other it.|
|**17 If any cannot be associated with a category list them as unclasify.**|...|

### Edge Type

> Which are the edged types?

| **Relation Family** | **Relation Type** | **Description** | **Relation Signature** | **Use** |
| --- | --- | --- | --- | --- |
| Representational | observes | Captures or measures a domain snapshot through perception or instrumentation. | Observation Interface → Domain Snapshot | Empirical sensing, experiments, perception systems |
| Representational | encodes | Transduces observations into persistent epistemic artifacts. | Observation Interface / Agent → Epistemic Artifact | Data acquisition, memory, recording |
| Representational | expresses_in | Instantiates an artifact in a specific representational substrate or encoding format. | Epistemic Artifact → Encoding Format | Formal notation, code, schemas |
| Representational | formalizes | Converts raw, implicit, or informal content into structured epistemic representation. | Operator / Agent → Epistemic Artifact | Ontologies, models, formal systems |
| Representational | abstracts_from | Extracts generalized structures or principles from lower-level artifacts. | Artifact / Theory → Lower-Level Artifact | Theory building, pattern extraction |
| Structural | composed_of | Defines constituent internal components, operations, or stages of an entity. | Operator / Process / Artifact → Subcomponent | Operator architecture, workflow decomposition |
| Structural | has_parameter | Specifies formal adjustable variables or governing parameters. | Operator / Model → Parameter | Configuration, tuning, optimization |
| Structural | has_input | Defines required epistemic inputs. | Operator / Process → Input Artifact | Pipeline specification |
| Structural | has_output | Defines produced outputs. | Operator / Process → Output Artifact | Output specification |
| Structural | implements_principle | Operationalizes an underlying formal or mathematical principle. | Operator → Principle | Fourier methods, Bayesian inference |
| Operational | uses | Agent or higher-order system employs a tool. | Agent / Operator → Operator | Scientific inquiry, automation |
| Operational | performs | Agent executes a process. | Agent → Process | Research, experimentation |
| Operational | acts_on | Operator, act, or process manipulates an artifact or domain. | Operator / Process / Act → Artifact / Domain | Data processing, intervention |
| Operational | produces | Generates a new artifact or epistemic output. | Agent / Operator / Process → Artifact | Model creation, inference products |
| Operational | transforms | Converts one artifact into another epistemic state. | Operator / Process → Artifact | Signal processing, inference |
| Operational | predicts | Produces projected future epistemic claims. | Model / Artifact → Future State | Forecasting, simulation |
| Operational | decomposes | Breaks an artifact into constituent analyzable components. | Operator → Artifact Components | Fourier analysis, PCA |
| Operational | integrates | Combines multiple epistemic sources into unified artifacts. | Operator / Process → Unified Artifact | Fusion, synthesis |
| Operational | estimates | Infers latent states, parameters, or distributions. | Operator / Process → Estimated Artifact | Bayesian methods, econometrics |
| Normative - Validation | conforms_to | Satisfies standards or evaluative criteria. | Artifact / Operator / Process → Standard | Scientific validity |
| Normative - Validation | evaluated_by | Subject is assessed by evaluative mechanism. | Artifact / Process → Standard / Operator | Benchmarking, review |
| Normative - Validation | validates | Confirms adequacy or correctness. | Process / Evidence → Artifact | Verification, replication |
| Normative - Validation | refutes | Disconfirms or falsifies a claim. | Evidence / Feedback → Artifact | Falsification |
| Normative - Validation | supports | Provides evidential reinforcement. | Evidence / Artifact → Artifact | Justification |
| Constraint | is_bounded_by | Subject exists under limiting conditions. | Artifact / Operator / Process → Constraint | Complexity, uncertainty |
| Constraint | constrains | Restricts epistemic operation, expressibility, or validity. | Constraint / Format → Subject | Formal, practical, methodological limitations |
| Constraint | distorts | Introduces systematic deviation or corruption. | Constraint → Artifact / Observation | Bias, noise |
| Constraint | depends_on | Requires enabling conditions. | Subject → Dependency | Infrastructure, quality prerequisites |
| Dynamic - Feedback | triggers | Feedback initiates epistemic adaptation. | Feedback → Process / Artifact | Revision, anomaly correction |
| Dynamic - Feedback | updates | Revises epistemic state based on new evidence. | Evidence / Feedback → Artifact / Process | Learning, Bayesian updating |
| Dynamic - Feedback | feeds_back_to | Recursive return of output into prior stages. | Output → Prior Process | Adaptive loops |
| Dynamic - Feedback | iterates_on | Repeatedly refines prior artifacts or processes. | Process → Prior Artifact / Process | Continuous improvement |
| Dynamic - Feedback | evolves_into | Develops into more advanced epistemic form. | Artifact / Process → Advanced Artifact / Process | Theory maturation |
| Infrastructure | provides | Supplies enabling material, computational, or sensory resources. | Infrastructure → Agent / Operator / Process | Labs, compute systems |
| Infrastructure | hosts | Sustains persistent epistemic systems or agents. | Institution / Infrastructure → Agent / System | Universities, organizations |
| Infrastructure | stores | Preserves epistemic artifacts over time. | Infrastructure → Artifact | Archives, repositories |
| Infrastructure | communicates | Transmits artifacts across epistemic agents. | Infrastructure / Artifact → Agent / Community | Journals, APIs |
| Infrastructure | standardizes | Establishes shared representational or methodological conventions. | Institution / Infrastructure → Standard / Format | Protocols, schemas |
| Meta-Epistemic | monitors | Tracks epistemic system quality or performance. | Meta-System → E |  |

> Note: The specific components will be formulated in the subsequent sections.

### Sample Dataset

```json
[
  {
    "id": "standard_04",
    "name": "Law of Large Numbers",
    "category": "Epistemic Standard",
    "inheritanceLevel": 1,
    "description": "Convergence of averages",
    "functionalRoles": ["norm"],
    "realityDomains": [],
    "historicalContext": {
      "summary": "",
      "chronology": []
    },
    "specific": {},
    "relationships": [
      {
        "relationshipType": "subtype_of",
        "targetNodeId": "cat_standard",
        "attributes": {}
      }
    ],
    "metadata": {
      "tags": ["stochastic", "convergence", "statistics", "theory"],
      "confidenceScore": 1.0,
      "sourceReference": "curated",
      "createdAt": "",
      "auditTrail": []
    }
  },
  {
    "id": "process_05",
    "name": "Abduction",
    "category": "Epistemic Process (Activity)",
    "inheritanceLevel": 1,
    "description": "Abduction is an epistemic process aimed at inferring and ranking candidate explanations for a given set of observations, based on how likely those observations would be under each hypothesis in a space of possible worlds.",
    "functionalRoles": ["process"],
    "realityDomains": [],
    "historicalContext": {
      "summary": "",
      "chronology": []
    },
    "specific": {},
    "relationships": [
      {
        "relationshipType": "subtype_of",
        "targetNodeId": "cat_process",
        "attributes": {}
      }
    ],
    "metadata": {
      "tags": ["#activity"],
      "confidenceScore": 1.0,
      "sourceReference": "curated",
      "createdAt": "",
      "auditTrail": []
    }
  }
]
```

## Partial Extraction Work

Schema:

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://example.org/conceptual-structure-node.schema.json",
  "title": "Conceptual Structure Typing Node Schema",
  "description": "Schema for representing epistemic, conceptual, or systemic structures as typed nodes within a conceptual hypergraph.",
  "type": "object",
  "required": [
    "id",
    "name",
    "category",
    "inheritanceLevel",
    "description",
    "functionalRoles",
    "realityDomains",
    "historicalContext",
    "relationships",
    "metadata"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "Unique identifier for the node."
    },
    "name": {
      "type": "string",
      "description": "Canonical name of the conceptual structure."
    },
    "category": {
      "type": "string",
      "description": "Major category, subtype, or ontological classification."
    },
    "inheritanceLevel": {
      "type": "number",
      "minimum": 0,
      "description": "Depth within conceptual or taxonomic inheritance hierarchy."
    },
    "description": {
      "type": "string",
      "description": "Formal description of the structure."
    },
    "functionalRoles": {
      "type": "array",
      "description": "Primary functional roles served by this structure.",
      "items": {
        "type": "string"
      }
    },
    "realityDomains": {
      "type": "array",
      "description": "Domains of reality, knowledge, or systems in which this structure operates.",
      "items": {
        "type": "string"
      }
    },
    "historicalContext": {
      "type": "object",
      "required": [
        "summary",
        "chronology"
      ],
      "properties": {
        "summary": {
          "type": "string",
          "description": "Historical summary of the conceptual structure."
        },
        "chronology": {
          "type": "array",
          "description": "Chronological development timeline.",
          "items": {
            "type": "object",
            "required": [
              "year",
              "event",
              "associatedContext"
            ],
            "properties": {
              "year": {
                "type": "number",
                "description": "Year of the event."
              },
              "event": {
                "type": "string",
                "description": "Description of the historical event."
              },
              "associatedContext": {
                "type": "string",
                "description": "Relevant actors, institutions, or contextual factors."
              }
            },
            "additionalProperties": false
          }
        }
      },
      "additionalProperties": false
    },
    "specific": {
      "type": "object",
      "description": "Domain-specific extension fields for specialized conceptual structures.",
      "additionalProperties": true
    },
    "relationships": {
      "type": "array",
      "description": "Connections to other conceptual nodes.",
      "items": {
        "type": "object",
        "required": [
          "relationshipFamily",
          "relationshipType",
          "targetNodeId",
          "attributes"
        ],
        "properties": {
          "relationshipFamily": {
            "type": "string",
            "description": "High-level relation family classification."
          },
          "relationshipType": {
            "type": "string",
            "description": "Specific relationship type."
          },
          "targetNodeId": {
            "type": "string",
            "description": "Identifier of the target node."
          },
          "attributes": {
            "type": "object",
            "description": "Additional relation-specific metadata.",
            "additionalProperties": true
          }
        },
        "additionalProperties": false
      }
    },
    "metadata": {
      "type": "object",
      "required": [
        "tags",
        "confidenceScore",
        "sourceReference",
        "createdAt",
        "auditTrail"
      ],
      "properties": {
        "tags": {
          "type": "array",
          "description": "Semantic or retrieval tags.",
          "items": {
            "type": "string"
          }
        },
        "confidenceScore": {
          "type": "number",
          "minimum": 0,
          "maximum": 1,
          "description": "Confidence score representing epistemic reliability."
        },
        "sourceReference": {
          "type": "string",
          "description": "Reference to source material or provenance."
        },
        "createdAt": {
          "type": "string",
          "format": "date-time",
          "description": "Creation timestamp."
        },
        "auditTrail": {
          "type": "array",
          "description": "Review and revision history.",
          "items": {
            "type": "object",
            "required": [
              "reviewDate",
              "reviewNote"
            ],
            "properties": {
              "reviewDate": {
                "type": "string",
                "format": "date",
                "description": "Date of review."
              },
              "reviewNote": {
                "type": "string",
                "description": "Review notes or modifications."
              }
            },
            "additionalProperties": false
          }
        }
      },
      "additionalProperties": false
    }
  },
  "additionalProperties": false
}
```

Specifictis:

**Epistemic Artifact**

> Structured object that encodes claims, constraints, or distributions over reality; the primary carrier of semantic content.

> In the edges specification - we need to capture the structure - that is which are the others epistemic nodes - that are somehow contain = or embdeded - or that have yield this artifact?

```json
"specific": {
  "modality": "sensorimotor | computational | cognitive",
  "structure": "summary of the ....",
  "noise_model": "probabilistic_distribution | deterministic_error_function",
}
```

**Epistemic Operator**

> Formal or procedural mechanism used to construct, transform, or validate epistemic artifacts. That is anythign that can helps in the epistemic process.

```json
"specific": {
  "operation_class": "transform | infer | optimize | simulate | validate",
  "preconditions": ["assumptions", "data_requirements"],
  "guarantees": ["correctness_bound", "convergence", "consistency"],
  "determinism": "deterministic | stochastic | hybrid",
  "composability": "low | medium | high"
}
```

**Epistemic Agent**

> Entity that performs epistemic operations by applying tools to artifacts.

```json
"specific": {
  "agent_type": "human | machine | hybrid_system | institution",
  "capabilities": ["perception", "inference", "learning", "intervention"],
  "goal_structure": "fixed | adaptive | multi_objective",
  "memory_model": "episodic | semantic | externalized | distributed",
  "tool_access": ["tool_ids"],
  "autonomy_level": "reactive | deliberative | self_improving",
  "error_tolerance": "low | medium | high"
}
```

**Epistemic Process (Activity)**

> Ordered sequence of tool applications over time; defines the dynamics of knowledge construction.

```json
"specific": {
  "process_type": "scientific_method | training_pipeline | experimental_loop | inference_cycle",
  "step_structure": ["observe", "encode", "model", "predict", "validate"],
  "control_flow": "sequential | iterative | branching | recursive",
  "termination_criteria": "convergence | threshold | external_stop | equilibrium",
  "update_mechanism": "batch | online | incremental",
  "feedback_integration": "none | periodic | continuous"
}
```

**Epistemic Standard**

> Normative criteria used to evaluate validity, correctness, or acceptability of artifacts and processes.

```json
"specific": {
  "evaluation_metrics": ["accuracy", "consistency", "precision", "recall", "robustness"],
  "thresholds": {"metric": "value"},
  "validation_method": "empirical | logical | statistical | simulation_based",
  "norm_type": "hard_constraint | soft_constraint | probabilistic_constraint",
  "reference_frame": "theory_based | data_driven | hybrid",
  "failure_modes": ["overfitting", "inconsistency", "non_reproducibility"]
}
```

**Encoding Substrate**

> Encoding format or substrate in which artifacts are expressed; constrains manipulation and interpretation.

```json
  "specific": {
    "substrate_type": "physical | symbolic | neural | biological | digital",
    "material": "paper | magnetic_disk | flash_memory | DNA | neuron_firing_pattern | silicon",
    "persistence": "volatile | non_volatile | ephemeral",
  }
```

**(Segment of Reality) Epistemic Domain**

> Segment of reality that the epistemic practice targets or models.

```json
"specific": {
  "domain_type": "physical_system | biological_system | social_system | computational_system",
  "boundary_definition": "closed | open | fuzzy",
  "scale": "micro | meso | macro",
  "interaction_structure": "network | field | agent_based | hybrid",
  "dynamics":  "static | evolving | non_stationary | stochastic | non_stationary deterministic stochastic evolution, non_stationary stotochatc stochastic evolution"
}
```

**Epistemic Constraint**

> Limitation that bounds what can be known or inferred within the system.

```json
"specific": {
  "constraint_type": "informational | computational | physical | statistical | epistemic",
  "source": "measurement | model | environment | resource_limit",
  "effect": "reduces_precision | limits_observability | increases_uncertainty",
  "scope": "local | global | system_wide",
  "severity": "low | medium | high | fundamental"
}
```

**Epistemic Infrastructure**

> Supporting environment that enables storage, computation, measurement, and communication of artifacts.

```json
"specific": {
  "elementType": ["sensors", "databases", "compute_units", "communication_channels"],
  "latency": "time_delay_distribution",
  "reliability": "failure_probability",
  "scalability": "linear | sublinear | superlinear",
  "interoperability": "low | medium | high",
  "maintenance_model": "manual | automated | self_healing"
}
```

**Epistemic Feedback**

> Signal from reality (or from another artifact) that resists or confirms prior predictions or actions; primary driver of learning and error correction.

```json
"specific": {
  "signal_type": "error | confirmation | anomaly | reinforcement",
  "source": "environment | model | external_agent | system_internal",
  "latency": "immediate | delayed | distributed",
  "target": "artifact | tool | process | agent",
  "update_role": "corrective | reinforcing | destabilizing"
}
```

**Epistemic Act**

> Primitive, non‑decomposable operation performed by an agent: attending, discriminating, remembering, anticipating, intervening, comparing, observing (which invokes Observation Encoding).

```json
"specific": {
  "act_type": "observe | compare | encode | retrieve | predict | intervene | discriminate",
  "input_state": "sensory_data | artifact | memory_state",
  "output_state": "updated_artifact | decision | signal",
  "atomicity": "atomic | semi_decomposable",
}
```

## Document
