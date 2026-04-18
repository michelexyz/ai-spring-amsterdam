---
week: 0
cycle: 0
theme: "foundation"
date: "17 April 2026"
paperTitle: "On The Measure of Intelligence"
paperUrl: "https://arxiv.org/abs/1911.01547"
paperAuthors: "François Chollet (Google)"
paperYear: 2019
companionTitle: "Why the biggest AI models can't solve simple puzzles"
companionUrl: "https://www.youtube.com/watch?v=fFL7la73RO4"
companionSource: "Dwarkesh podcast, 2024"
companionDescription: "An animated discussion between François Chollet and Dwarkesh Patel. The first believes that current AI systems are not truly intelligent and that we need to rethink our approach to building them. Dwarkesh, instead is more optimistic about the potential of transformers and believes they only need to be scaled further."
completed: true
---
We are going to get started with something "easier" but important, which will serve as the foundation and north star for our future discussions.

### The context
Recently, the [ARC-AGI-3](https://arcprize.org/arc-agi/3) Benchmark has been released. It should be a reliable way to score the intelligence of an LLM on unseen tasks. The interesting aspect is that these tasks, which are simple 2D games, are easily solvable by a human player. On the other hand, state-of-the-art models can only win 0.2% of the games on the private dataset ([https://arcprize.org/leaderboard](https://arcprize.org/leaderboard)).

The person behind the benchmark, François Chollet, has been famously pessimistic regarding the efficiency and intelligence of transformers or gradient descent-based models. More importantly, he has been an advocate for new effective benchmarks to measure the generalization capabilities of these models. The ARC-AGI 1 and 2 benchmarks were, in fact, only solved when new paradigms were introduced, such as CoT and RL-trained reasoning, respectively.

### The reading 📄
To better understand the need for these benchmarks, which ultimately guide AI progress, I propose we read this paper Chollet wrote in 2019.  Here he provides a new perspective on the oldest problem in AI: "how do we define intelligence?", which is extended to the question "how do we measure it?".

Link to the paper: https://arxiv.org/abs/1911.01547
Read Chapters I (~1h) and II.1 (~35min).
There is no math in these parts and it reads smoothly.
Feel free to read chapter II(it provides a more technical definition of intelligence) and III (introduces the ARC-AGI benchmark) fully, if you have time and interest. 
