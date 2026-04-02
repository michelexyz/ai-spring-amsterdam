---
week: 1
cycle: 1
theme: "foundation"
date: "TBD"
paperTitle: "An Explanation of In-context Learning as Implicit Bayesian Inference"
paperUrl: "https://arxiv.org/abs/2111.02080"
paperAuthors: "Xie, Raghunathan, Liang, Ma"
paperYear: 2021
companionTitle: "In-context Learning and Induction Heads"
companionUrl: "https://transformer-circuits.pub/2022/in-context-learning-and-induction-heads/index.html"
companionSource: "Olsson et al. (Anthropic), 2022"
companionDescription: "A mechanistic interpretability investigation into how in-context learning actually happens inside transformers, identifying 'induction heads' as a key circuit."
note: "Assumed pre-read: Attention Is All You Need (Vaswani et al., 2017). We assume familiarity with the transformer architecture as a baseline."
alternatives:
  - label: "Option A"
    paperTitle: "Language Models are Few-Shot Learners (GPT-3)"
    paperUrl: "https://arxiv.org/abs/2005.14165"
    paperAuthors: "Brown et al. (OpenAI), 2020"
    companionTitle: "The Illustrated GPT-3"
    companionUrl: "https://jalammar.github.io/how-gpt3-works-visualizations-animations/"
  - label: "Option B"
    paperTitle: "Transformers Learn In-Context by Gradient Descent"
    paperUrl: "https://arxiv.org/abs/2212.07677"
    paperAuthors: "Von Oswald, Niklasson, Randazzo et al., 2023"
    companionTitle: "In-context Learning and Induction Heads"
    companionUrl: "https://transformer-circuits.pub/2022/in-context-learning-and-induction-heads/index.html"
  - label: "Option C"
    paperTitle: "Chain-of-Thought Prompting Elicits Reasoning in LLMs"
    paperUrl: "https://arxiv.org/abs/2201.11903"
    paperAuthors: "Wei et al. (Google Brain), 2022"
    companionTitle: "Large Language Models are Zero-Shot Reasoners"
    companionUrl: "https://arxiv.org/abs/2205.11916"
---

Proposes a theoretical framework for why in-context learning works: transformers implicitly perform Bayesian inference over latent "concepts" during pre-training, then use the prompt to identify and condition on the relevant concept at inference time. A foundational lens for understanding the most surprising emergent capability of LLMs.
