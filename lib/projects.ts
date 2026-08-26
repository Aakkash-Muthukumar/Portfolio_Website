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
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
