---
week: 1
cycle: 1
theme: "foundation"
date: "21 April 2026"
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
  - label: "Alternative"
    paperTitle: "Transformers Learn In-Context by Gradient Descent"
    paperUrl: "https://arxiv.org/abs/2212.07677"
    paperAuthors: "Von Oswald, Niklasson, Randazzo et al., 2023"
    companionTitle: "In-context Learning and Induction Heads"
    companionUrl: "https://transformer-circuits.pub/2022/in-context-learning-and-induction-heads/index.html"
completed: false
---

Proposes a theoretical framework for why in-context learning works: transformers implicitly perform Bayesian inference over latent "concepts" during pre-training, then use the prompt to identify and condition on the relevant concept at inference time. A foundational lens for understanding the most surprising emergent capability of LLMs.
