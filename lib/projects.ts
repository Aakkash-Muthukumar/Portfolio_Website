export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  discipline: string;
  year: string;
  summary: string;
  overview: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  challenge: string;
  approach: string[];
  result: string;
};

export const projects: Project[] = [
  {
    slug: 'radiography-classification',
    title: 'Radiography Image Classification',
    shortTitle: 'Radiography classification',
    discipline: 'Machine learning · Computer vision',
    year: '2024',
    summary: 'A multi-class chest X-ray classifier paired with an interpretability dashboard for non-technical review.',
    overview: 'I trained a transfer-learning pipeline on approximately 17,000 chest X-ray images, then built a Streamlit interface that exposed both predictions and Grad-CAM attention regions.',
    technologies: ['TensorFlow', 'Keras', 'MobileNetV2', 'Streamlit', 'Grad-CAM'],
    metrics: [
      { label: 'Training corpus', value: '≈17K images' },
      { label: 'Base architecture', value: 'MobileNetV2' },
      { label: 'Imbalance strategy', value: 'Focal Loss' },
      { label: 'Interpretability', value: 'Grad-CAM' },
    ],
    challenge: 'Radiography datasets are difficult for two connected reasons: classes are not distributed evenly, and a model score alone does not show a reviewer why the network made its decision.',
    approach: [
      'Used MobileNetV2 transfer learning to start from strong visual features instead of training an entire convolutional network from scratch.',
      'Applied Focal Loss so difficult and underrepresented examples had more influence during training.',
      'Added Grad-CAM overlays in a Streamlit dashboard to surface the image regions contributing to a prediction.',
    ],
    result: 'The project became more than a model notebook: it was a reviewable ML system with a clear path from input image to prediction and visual explanation.',
  },
  {
    slug: 'open-weight-llm-benchmarking',
    title: 'Open-Weight LLM Benchmarking',
    shortTitle: 'Open-weight LLM benchmarking',
    discipline: 'AI systems · Performance engineering',
    year: '2025–2026',
    summary: 'A reproducible evaluation framework for choosing local language models based on capability and inference trade-offs.',
    overview: 'I compared Gemma, GPT-OSS, DeepSeek, and Qwen across reasoning, code generation, and local inference latency to understand which models fit different offline workloads.',
    technologies: ['Python', 'Ollama', 'Gemma', 'DeepSeek', 'Qwen'],
    metrics: [
      { label: 'Model families', value: '4 compared' },
      { label: 'Execution', value: 'Local / offline' },
      { label: 'Evaluation axes', value: 'Quality + speed' },
      { label: 'Deliverable', value: 'Decision framework' },
    ],
    challenge: 'Model selection is rarely a simple leaderboard problem. A model that performs well on reasoning may be too slow for an interactive local application, while a fast model may fail the workload that matters.',
    approach: [
      'Defined repeatable reasoning and code-generation prompts rather than relying on one-off impressions.',
      'Measured inference latency in the same local runtime to keep comparisons meaningful.',
      'Documented trade-offs as a selection framework that downstream projects could use instead of treating one model as universally best.',
    ],
    result: 'The work turned model experimentation into an engineering decision process, connecting evaluation evidence to real deployment constraints.',
  },
  {
    slug: 'custom-64-bit-operating-system',
    title: 'Custom 64-bit Operating System',
    shortTitle: '64-bit operating system',
    discipline: 'Systems programming · OS internals',
    year: 'Fall 2025',
    summary: 'A small operating system that boots from hand-written assembly into a 64-bit C kernel and interactive shell.',
    overview: 'I built the boot path from scratch, moving the processor through real mode, 32-bit protected mode, and 64-bit long mode before handing execution to a C kernel.',
    technologies: ['C', 'x86 Assembly', 'QEMU', 'GDT', 'Page Tables'],
    metrics: [
      { label: 'Boot stages', value: '16 → 32 → 64 bit' },
      { label: 'Kernel language', value: 'C' },
      { label: 'Bootloader', value: 'x86 Assembly' },
      { label: 'Test environment', value: 'QEMU' },
    ],
    challenge: 'At boot there is no runtime, operating system, or safety net. CPU state, descriptor tables, paging, and memory layout all have to be correct before higher-level code can run.',
    approach: [
      'Wrote an x86 assembly bootloader and explicitly managed each processor-mode transition.',
      'Configured the Global Descriptor Table and page tables required for long-mode operation.',
      'Used QEMU for short debugging cycles while developing an interactive kernel shell.',
    ],
    result: 'The system boots reliably into a 64-bit kernel shell, demonstrating the entire path from the first instruction to an interactive program environment.',
  },
  {
    slug: 'scaffold-writing-assistant',
    title: 'Scaffold Writing Assistant',
    shortTitle: 'Scaffold',
    discipline: 'AI product · Developer tooling',
    year: '2026',
    summary: 'A collaborative writing assistant that decomposes rubrics into tasks and gives feedback as a document evolves.',
    overview: 'Built with a hackathon team, Scaffold used the Claude API inside a document extension to support the writing process without generating the entire report for the student.',
    technologies: ['TypeScript', 'Claude API', 'Browser Extension', 'Google Docs'],
    metrics: [
      { label: 'Build format', value: 'Hackathon' },
      { label: 'Core input', value: 'Assignment rubric' },
      { label: 'Core output', value: 'Live task feedback' },
      { label: 'Product stance', value: 'Assist, don’t replace' },
    ],
    challenge: 'Many AI writing tools optimize for generating final text. That can remove the planning and revision work that helps students develop as writers.',
    approach: [
      'Parsed rubric expectations into smaller, trackable writing tasks.',
      'Connected feedback to the evolving document so guidance could update as the user wrote.',
      'Designed the AI as a scaffold for the process rather than a replacement for the author.',
    ],
    result: 'The prototype demonstrated a more responsible interaction model for AI-assisted writing: structure, feedback, and progress without taking ownership of the work away from the student.',
  },
  {
    slug: 'ai-malware-triage',
    title: 'AI-Orchestrated Malware Triage',
    shortTitle: 'Malware triage tool',
    discipline: 'AI product · Security tooling',
    year: 'Spring 2026',
    summary: 'A safety-first analysis pipeline that turns static evidence and external lookups into a structured, plain-English report.',
    overview: 'I built a React/Vite and Python tool that coordinates pefile, python-magic, YARA, VirusTotal, and the Claude API while keeping observed evidence separate from model inference.',
    technologies: ['Python', 'React', 'Claude API', 'YARA', 'VirusTotal'],
    metrics: [
      { label: 'Analysis posture', value: 'Static only' },
      { label: 'Execution default', value: 'Fail closed' },
      { label: 'Analysis tools', value: '3 coordinated' },
      { label: 'Output', value: 'Unified report' },
    ],
    challenge: 'Security analysis needs clarity about what is known and what is inferred. An AI summary that sounds confident but blurs that line can make a triage workflow less safe, not more useful.',
    approach: [
      'Combined file-type inspection, PE parsing, and YARA rules into one static-analysis pipeline without executing the sample.',
      'Kept VirusTotal hash lookups off by default and coordinated external evidence through explicit user-controlled steps.',
      'Structured prompts and reports so observed indicators remained distinct from inferred behavior.',
    ],
    result: 'The project became an example of the engineering stance I want to bring to AI products: orchestration is useful, but guardrails, evidence boundaries, and honest uncertainty are part of the feature.',
  },
  {
    slug: 'stem-forge',
    title: 'STEM Forge',
    shortTitle: 'STEM Forge',
    discipline: 'AI education · Full-stack product',
    year: 'Fall 2025',
    summary: 'An award-winning, local-first learning platform that generates adaptive quizzes, coding problems, and custom courses.',
    overview: 'Built for MESA U Hacks 2.0, STEM Forge pairs a FastAPI backend and React interface with Gemma 3n through Ollama so the full learning experience can run on-device.',
    technologies: ['Python', 'FastAPI', 'React', 'Gemma 3n', 'Ollama'],
    metrics: [
      { label: 'Recognition', value: 'Best AI Integration' },
      { label: 'Execution', value: 'Fully local' },
      { label: 'Learning modes', value: '3 adaptive' },
      { label: 'Build format', value: 'Hackathon' },
    ],
    challenge: 'AI learning tools often assume a persistent cloud connection and optimize for answer generation. We wanted a tool that could support active learning even where connectivity or privacy made cloud dependence a poor fit.',
    approach: [
      'Designed multiple learning modes for quizzes, coding practice, and on-demand course generation.',
      'Connected a React frontend to a FastAPI service running Gemma 3n locally through Ollama.',
      'Kept the complete inference path on-device so learners could use it without reliable internet.',
    ],
    result: 'STEM Forge received the Best AI Integration Award and reinforced a theme that now appears throughout my work: useful AI should meet people where they are, not require ideal infrastructure.',
  },
  {
    slug: 'real-time-asl-translator',
    title: 'Real-Time ASL Translator',
    shortTitle: 'ASL translator',
    discipline: 'Multimodal AI · Accessibility',
    year: 'Summer 2025',
    summary: 'An offline-first multimodal pipeline translating webcam ASL gestures into English text and speech.',
    overview: 'I combined OpenCV input processing with Gemma 3n inference behind a FastAPI service, then deployed the pipeline locally through Ollama for privacy and low-connectivity use.',
    technologies: ['OpenCV', 'Gemma 3n', 'FastAPI', 'Ollama'],
    metrics: [
      { label: 'Input', value: 'Live webcam' },
      { label: 'Output', value: 'Text + speech' },
      { label: 'Deployment', value: 'Offline first' },
      { label: 'Focus', value: 'Accessibility' },
    ],
    challenge: 'A real-time accessibility tool has to connect perception, language, and presentation while respecting the privacy and connectivity constraints of the people it is meant to support.',
    approach: [
      'Captured and prepared live gesture input through OpenCV.',
      'Used Gemma 3n to connect multimodal observations to English output.',
      'Ran the system locally via Ollama to avoid sending sensitive camera input to a cloud service.',
    ],
    result: 'The prototype connected multimodal AI with a concrete human need and pushed me toward local-first systems where privacy, responsiveness, and access matter.',
  },
  {
    slug: 'youtube-rag-chatbot',
    title: 'Source-Linked YouTube RAG',
    shortTitle: 'YouTube RAG',
    discipline: 'Retrieval systems · Data engineering',
    year: 'Summer 2025',
    summary: 'A transcript-ingestion and retrieval service where every generated answer points back to its source and timestamp.',
    overview: 'I built a FastAPI pipeline that ingests YouTube transcripts, embeds them in Milvus, and returns source-linked answers through a REST API.',
    technologies: ['Python', 'FastAPI', 'OpenAI', 'Milvus', 'REST API'],
    metrics: [
      { label: 'Data type', value: 'Transcripts' },
      { label: 'Retrieval', value: 'Vector search' },
      { label: 'Verification', value: 'Timestamp links' },
      { label: 'Interface', value: 'REST API' },
    ],
    challenge: 'Retrieval makes generated answers more grounded, but users still need a direct path back to the evidence—especially when a long video makes manual verification expensive.',
    approach: [
      'Built an ingestion pipeline for transcript segments and their source metadata.',
      'Stored embeddings in Milvus and exposed retrieval through a FastAPI service.',
      'Preserved transcript and timestamp lineage through the entire response path.',
    ],
    result: 'The system made auditability a first-class product behavior: the answer was useful, but the path back to the original moment in the video was equally important.',
  },
  {
    slug: 'custom-linux-environment',
    title: 'Custom Linux Environment',
    shortTitle: 'Arch Linux environment',
    discipline: 'Linux · Systems operations',
    year: 'Summer 2025–Present',
    summary: 'A hand-configured Arch Linux daily driver with Hyprland, custom services, logging, permissions, and automated setup.',
    overview: 'This is less a weekend project than an operating practice: I built and maintain my own Arch environment, author systemd services, inspect journald logs, and automate setup with Bash.',
    technologies: ['Arch Linux', 'Hyprland', 'systemd', 'Bash', 'FACL'],
    metrics: [
      { label: 'Role', value: 'Daily driver' },
      { label: 'Service manager', value: 'systemd' },
      { label: 'Diagnostics', value: 'journald' },
      { label: 'Automation', value: 'Bash' },
    ],
    challenge: 'Using Linux as a daily driver turns configuration into an ongoing systems exercise: services fail, dependencies change, permissions matter, and every convenient abstraction eventually exposes the layer below.',
    approach: [
      'Built the desktop around Arch Linux and Hyprland instead of treating a preconfigured VM as the finished environment.',
      'Authored service units and managed dependencies, targets, and logging with systemd and journald.',
      'Used POSIX permissions, file access-control lists, and Bash automation to make the environment repeatable.',
    ],
    result: 'Maintaining the environment made systems knowledge part of my everyday workflow—not a list of commands learned once for a course.',
  },
  {
    slug: 'college-enrollment-system',
    title: 'Multi-User College Enrollment System',
    shortTitle: 'Enrollment system',
    discipline: 'Software engineering · Networking',
    year: 'Spring 2025',
    summary: 'A Java client-server application supporting concurrent students, instructors, and administrators with role-based permissions.',
    overview: 'I designed the system from a formal Software Requirements Specification, then implemented a TCP/IP socket architecture with distinct flows for three user roles.',
    technologies: ['Java', 'TCP/IP', 'Sockets', 'Multi-user architecture'],
    metrics: [
      { label: 'User roles', value: '3' },
      { label: 'Architecture', value: 'Client / server' },
      { label: 'Networking', value: 'TCP/IP' },
      { label: 'Design artifact', value: 'Complete SRS' },
    ],
    challenge: 'A multi-user academic system has overlapping workflows and permissions. Building the network layer is only part of the job; the expected behavior has to be clear before implementation begins.',
    approach: [
      'Authored functional and non-functional requirements in a complete Software Requirements Specification.',
      'Designed separate permissions and workflows for students, instructors, and administrators.',
      'Implemented concurrent client-server communication over Java TCP/IP sockets.',
    ],
    result: 'The project connected implementation with engineering process and taught me that good requirements reduce ambiguity long before the first difficult bug appears.',
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
