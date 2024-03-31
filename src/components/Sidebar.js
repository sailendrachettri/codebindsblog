import React from 'react'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
    return (
        <>
            <div className="mt-4">
                <ul className="list-group">

                    {/* // Collaps menu 1 */}
                    <Link to='#' className="list-group-item active border" data-bs-toggle="collapse" data-bs-target="#collapsmenu-1" aria-expanded="false" aria-controls="collapsmenu-1">
                        Learn Ollama
                    </Link>
                    <div className="collapse show" id="collapsmenu-1">
                        <Link to="https://www.youtube.com/watch?v=xa8pTD16SnM&ab_channel=Decoder" target="_blank" className="list-group-item"><i class="bi bi-youtube"></i> Installing Ollama to Customize My Own LLM</Link>
                        <Link to="https://www.youtube.com/watch?v=syR0fT0rkgY&ab_channel=Decoder" target="_blank" className="list-group-item"><i class="bi bi-youtube"></i> Use Your Self-Hosted LLM</Link>
                        <Link to="https://www.youtube.com/watch?v=fnvZJU5Fj3Q&ab_channel=Decoder" target="_blank" className="list-group-item"><i class="bi bi-youtube"></i> Importing Open Source Models to Ollama</Link>
                        <Link to="https://www.youtube.com/watch?v=JwYwPiOh72w&ab_channel=LearnDatawithMark" target="_blank" className="list-group-item"><i class="bi bi-youtube"></i>Ollama has a Python library </Link>
                        <Link to="https://www.youtube.com/watch?v=MiJQ_zlnBeo&ab_channel=LearnDatawithMark" target="_blank" className="list-group-item"><i class="bi bi-youtube"></i> Building a local ChatGPT with Chainlit, Mixtral, and Ollama</Link>
                        <Link to="https://www.youtube.com/watch?v=XFTFEKYLxyU" target="_blank" className="list-group-item"><i class="bi bi-youtube"></i> Langroid: Chat to a CSV file using Mixtral (via Ollama)</Link>
                        <Link to="https://www.youtube.com/watch?v=ocfzGBnhhDE" target="_blank" className="list-group-item"><i class="bi bi-youtube"></i> Few Shot Prompting with Llama2 and Ollama</Link>
                        <Link to="https://www.youtube.com/watch?v=7BH4C6-HP14&ab_channel=LearnDatawithMark" target="_blank" className="list-group-item"><i class="bi bi-youtube"></i> Hugging Face GGUF Models locally with Ollama</Link>
                        <Link to="https://www.youtube.com/watch?v=UQw04VW60U0&ab_channel=MervinPraison" target="_blank" className="list-group-item"><i class="bi bi-youtube"></i> Autogen: Ollama integration</Link>
                        <Link to="https://www.youtube.com/watch?v=NNBWmIve3fQ&ab_channel=MattWilliams" target="_blank" className="list-group-item"><i class="bi bi-youtube"></i> Writing Better Code with Ollama</Link>
                        <Link to="https://www.youtube.com/watch?v=k_1pOF1mj8k&ab_channel=SamWitteveen" target="_blank" className="list-group-item"><i class="bi bi-youtube"></i> Ollama meets LangChain</Link>
                        <Link to="https://www.youtube.com/watch?v=rfr4p0srlqs&ab_channel=LearnDatawithMark" target="_blank" className="list-group-item"><i class="bi bi-youtube"></i>Running Mixtral on your machine with Ollama </Link>
                        <Link to="https://www.youtube.com/watch?v=NFgEgqua-fg&ab_channel=LearnDatawithMark" target="_blank" className="list-group-item"><i class="bi bi-youtube"></i> Running Mistral AI on your machine with Ollama</Link>
                        <Link to="https://www.youtube.com/watch?v=4HfSfFvLn9Q&ab_channel=MervinPraison" target="_blank" className="list-group-item"><i class="bi bi-youtube"></i> How to implement Ollama RAG?</Link>
                        <Link to="https://www.youtube.com/watch?v=84vGNkW1A8s&ab_channel=MervinPraison" target="_blank" className="list-group-item"><i class="bi bi-youtube"></i> Ollama Web UI </Link>
                        <Link to="https://www.youtube.com/watch?v=bt4AR7sK9tk&ab_channel=DataScienceBasics" target="_blank" className="list-group-item"><i class="bi bi-youtube"></i>How TO Install Ollama Web UI </Link>
                        <Link to="https://www.youtube.com/watch?v=tIRx-Sm3xDQ&ab_channel=IanWootten" target="_blank" className="list-group-item"><i class="bi bi-youtube"></i> Ollama: Run Uncensored Llama2 on Mac</Link>
                        <Link to="https://www.youtube.com/watch?v=rIRkxZSn-A8&ab_channel=MatthewBerman" target="_blank" className="list-group-item"><i class="bi bi-youtube"></i>ChatGPT Clone: Using Ollama</Link>
                        <Link to="https://www.youtube.com/watch?v=7BH4C6-HP14&t=8s&ab_channel=LearnDatawithMark" target="_blank" className="list-group-item"><i class="bi bi-youtube"></i>Hugging Face GGUF Models locally with Ollama </Link>
                        <Link to="https://www.youtube.com/watch?v=QUJHEvCqhdw&ab_channel=MattWilliams" target="_blank" className="list-group-item"><i class="bi bi-youtube"></i> Using the Chat Endpoint in the Ollama API</Link>
                        <Link to="https://www.youtube.com/watch?v=0ou51l-MLCo&t=211s&ab_channel=MattWilliams" target="_blank" className="list-group-item"><i class="bi bi-youtube"></i> Adding Custom Models to Ollama</Link>
                        <Link to="https://www.youtube.com/watch?v=38jlvmBdBrU&ab_channel=MattWilliams" target="_blank" className="list-group-item"><i class="bi bi-youtube"></i> Finally Ollama has an OpenAI compatible API</Link>
                        <Link to="https://www.youtube.com/watch?v=H_cqBjDVinw&ab_channel=MattWilliams" target="_blank" className="list-group-item"><i class="bi bi-youtube"></i> Hosting Ollama Starts With Env Variables </Link>
                        <Link to="https://www.youtube.com/watch?v=6bF1uCHTFyk&ab_channel=MattWilliams" target="_blank" className="list-group-item"><i class="bi bi-youtube"></i> Understanding How Ollama Stores Models</Link>
                        <Link to="https://www.youtube.com/watch?v=Qa1h7ygwQq8&ab_channel=TechwithMarco" target="_blank" className="list-group-item"><i class="bi bi-youtube"></i> Run any AI model remotely for free on google colab</Link>
                        <Link to="https://www.youtube.com/watch?v=Zo3CTapKJ4I&ab_channel=PromptEngineering" target="_blank" className="list-group-item"><i class="bi bi-youtube"></i> Run Mixtral 8x7B MoE in Google Colab</Link>
                        <Link to="https://github.com/dvmazur/mixtral-offloading?tab=readme-ov-file" target="_blank" className="list-group-item"><i class="bi bi-book-fill"></i> Docs 1</Link>
                        <Link to="https://huggingface.co/lavawolfiee/Mixtral-8x7B-Instruct-v0.1-offloading-demo" target="_blank" className="list-group-item"><i class="bi bi-book-fill"></i> Docs 2 </Link>
                        <Link to="https://www.youtube.com/watch?v=vzUJ-yjA8Bw&ab_channel=AnalyticsVidhya" target="_blank" className="list-group-item"><i class="bi bi-youtube"></i> Run Mixtral 8x7B Hands On Google Colab</Link>
                        <Link to="https://drive.google.com/drive/folders/1Bo4sJu9vEnjzV_h4FmBNb6dSZ8BxZxpa" target="_blank" className="list-group-item"><i class="bi bi-book-fill"></i> Docs 1 </Link>
                        <Link to="https://drive.google.com/drive/folders/1AuReI63WzKRSdzRIlCxl6WuBkNMryPv9" target="_blank" className="list-group-item"><i class="bi bi-book-fill"></i> Docs 2</Link>
                        <Link to="https://www.youtube.com/watch?v=IJYC6zf86lU&ab_channel=TimCarambat" target="_blank" className="list-group-item"><i class="bi bi-youtube"></i> Local LLM's with Ollama x AnythingLLM</Link>
                        <Link to="https://useanything.com/download" target="_blank" className="list-group-item"><i class="bi bi-book-fill"></i> Any LLM, unlimited documents, and fully private</Link>
                        <Link to="https://www.youtube.com/watch?v=TFwYvHZV6j0&t=72s&ab_channel=DataScienceBasics" target="_blank" className="list-group-item"><i class="bi bi-youtube"></i>Ollama: Create Custom Models From HuggingFace (GGUF)</Link>
                        <Link to="https://www.youtube.com/watch?v=ZoxJcPkjirs&t=127s&ab_channel=MattWilliams" target="_blank" className="list-group-item"><i class="bi bi-youtube"></i> How to run Ollama on Docker</Link>
                        <Link to="https://www.youtube.com/watch?v=QRot1WtivqI&ab_channel=MattWilliams" target="_blank" className="list-group-item"><i class="bi bi-youtube"></i> Easy Access to GPUs for Ollama</Link>
                        <Link to="https://brev.dev/" target="_blank" className="list-group-item"><i class="bi bi-book-fill"></i> Fine-tune, train, or deploy</Link>
                        <Link to="https://tailscale.com/" target="_blank" className="list-group-item"> <i class="bi bi-book-fill"></i> Tailscale is a zero config VPN for building secure networks</Link>
                        <Link to="https://www.youtube.com/watch?v=zEN_oKrttK0&ab_channel=PamelaFox" target="_blank" className="list-group-item"><i class="bi bi-youtube"></i> Using Ollama as a local LLM for chat apps</Link>
                        <Link to="https://www.youtube.com/watch?v=QSfvLWaJc2s&t=20s&ab_channel=FahdMirza" target="_blank" className="list-group-item"><i class="bi bi-youtube"></i> Access Ollama Model with Public IP Remotely</Link>
                        <Link to="https://www.youtube.com/watch?v=6QAIbThWomc&ab_channel=MattWilliams" target="_blank" className="list-group-item"><i class="bi bi-youtube"></i>Use Ollama's Embeddings to Build an App</Link>
                        <Link to="https://github.com/technovangelist/videoprojects" target="_blank" className="list-group-item"><i class="bi bi-book-fill"></i> Docs 1</Link>
                        <Link to="https://blog.langchain.dev/json-based-agents-with-ollama-and-langchain/" target="_blank" className="list-group-item"> <i class="bi bi-book-fill"></i> JSON agents with Ollama & LangChain</Link>
                        <Link to="https://www.youtube.com/watch?v=V1Mz8gMBDMo&ab_channel=Decoder" target="_blank" className="list-group-item"><i class="bi bi-youtube"></i> RAG from the Ground Up with Python and Ollama</Link>
                        <Link to="https://decoder.sh/videos/rag-from-the-ground-up-with-python-and-ollama" target="_blank" className="list-group-item"><i class="bi bi-book-fill"></i> Docs 1</Link>
                        <Link to="https://www.youtube.com/watch?v=kfbTZFAikcE&ab_channel=AIProductBuilders" target="_blank" className="list-group-item"><i class="bi bi-youtube"></i> FREE Local RAG Chatbot with Ollama</Link>
                        <Link to="https://www.linkedin.com/pulse/how-build-rag-chatbot-using-ollama-serve-llms-locally-sri-laxmi-beapc/?utm_source=share&utm_medium=member_ios&utm_campaign=share_via" target="_blank" className="list-group-item"><i class="bi bi-book-fill"></i> Docs 1</Link>
                    </div>

                    {/* // Collaps menu 2 */}
                    <Link to='#' className="list-group-item active border" data-bs-toggle="collapse" data-bs-target="#collapsmenu-2" aria-expanded="false" aria-controls="collapsmenu-2">
                        History of NLP
                    </Link>
                    <div className="collapse" id="collapsmenu-2">
                        <Link to="https://arxiv.org/pdf/2306.08302.pdf" target="_blank" className="list-group-item"><i class="bi bi-book-fill"></i> LLM Knowledge Graphs</Link>
                    </div>

                    {/* // Collaps menu 3 */}
                    <Link to='#' className="list-group-item active border" data-bs-toggle="collapse" data-bs-target="#collapsmenu-3" aria-expanded="false" aria-controls="collapsmenu-3">
                        Large language model
                    </Link>
                    <div className="collapse" id="collapsmenu-3">
                        <Link to="https://www.youtube.com/watch?v=5sLYAQS9sWQ&ab_channel=IBMTechnology" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> How LLM Works</Link>
                        <Link to="https://www.youtube.com/watch?v=zjkBMFhNj_g&ab_channel=AndrejKarpathy" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Intro to LLM - Andrej Karpathy</Link>
                        <Link to="https://drive.google.com/file/d/1pxx_ZI7O-Nwl7ZLNk5hI3WzAsTLwvNU7/view" target="_blank" className="list-group-item"><i className='bi bi-book-fill'></i> Slide PDF</Link>
                        <Link to="https://drive.google.com/file/d/1FPUpFMiCkMRKPFjhi9MAhby68MHVqe8u/view" target="_blank" className="list-group-item"><i className='bi bi-book-fill'></i> Slide PPT Keynote</Link>
                        <Link to=" https://github.com/karpathy/makemore" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Makemore implementation from Andrej Karpathy</Link>
                        <Link to="https://github.com/karpathy/nn-zero-to-hero/blob/master/lectures" target="_blank" className="list-group-item"><i className='bi bi-book-fill'></i> Neural Networks by Andrej Karpathy</Link>
                        <Link to="https://github.com/karpathy/nn-zero-to-hero/tree/master" target="_blank" className="list-group-item"><i className='bi bi-book-fill'></i> Github Repo - A. Karpathy</Link>
                        <Link to="https://www.youtube.com/watch?v=kCc8FmEb1nY&ab_channel=AndrejKarpathy" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Build GPT: from scratch</Link>
                        <Link to="https://colab.research.google.com/drive/1JMLa53HDuA-i7ZBmqV7ZnA3c_fvtXnx-?usp=sharing" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Google Colab</Link>
                        <Link to="https://www.youtube.com/watch?v=zduSFxRajkE&ab_channel=AndrejKarpathy" target="_blank" className="list-group-item"><i className='bi bi-youtube'>Let's build the GPT Tokenizer</i> </Link>
                        <Link to="https://colab.research.google.com/drive/1y0KnCFZvGVf_odSfcNAws6kcDD7HsI0L?usp=sharing" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Google colab</Link>
                        <Link to="https://github.com/karpathy/minbpe" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Github Repo: minbpe A. karpathy</Link>
                        <Link to="https://www.youtube.com/watch?v=UU1WVnMk4E8&t=24s&ab_channel=freeCodeCamp.org" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Create a LLM from Scratch with Python</Link>
                        <Link to="https://www.manning.com/books/build-a-large-language-model-from-scratch" target="_blank" className="list-group-item"><i className='bi bi-book-fill'></i> Build a Large Language Model (From Scratch)</Link>
                        <Link to="https://github.com/rasbt/LLMs-from-scratch" target="_blank" className="list-group-item"><i className='bi bi-book-fill'></i> Code: LLM from Scratch</Link>
                        <Link to="https://www.youtube.com/watch?v=ZLbVdvOoTKM&pp=ygUdQ3JlYXRlIGEgTGFyZ2UgTGFuZ3VhZ2UgTW9kZWw%3D" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> How to Build an LLM from Scratch</Link>
                        <Link to="https://www.youtube.com/watch?v=XS8eRtlcCGU&ab_channel=SophiaYang" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Train your language model - nanoGP</Link>
                        <Link to="https://www.youtube.com/watch?v=jkrNMKz9pWU&ab_channel=JeremyHoward" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> A Hackers' Guide to Language Models</Link>
                        <Link to="https://www.youtube.com/watch?v=CUjO8b6_ZuM&t=452s&ab_channel=LeonExplainsAI" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Create your own Local Chatgpt</Link>
                        <Link to="https://www.youtube.com/watch?v=IH45ltIMC3k&ab_channel=ArizeAI" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> LLM Evaluation Essentials</Link>
                        <Link to="https://docs.arize.com/phoenix/llm-evals/running-pre-tested-evals/hallucinations" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Analysis of Hallucination LLM</Link>
                        <Link to="https://www.youtube.com/watch?v=b-MfkFz-A2E&ab_channel=ArizeAI" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Fine Tuning and Evaluating LLMs</Link>
                        <Link to="https://www.youtube.com/watch?v=AYehm7q6Oks&ab_channel=ArizeAI" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Advanced LLM Evaluation</Link>
                        <Link to="https://www.youtube.com/watch?v=PtXOQDHPddE&ab_channel=ArizeAI" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Evaluation Approach for GenAI</Link>
                        <Link to="https://www.youtube.com/watch?v=ExO3U0M3y_0&ab_channel=ArizeAI" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> LLM Evaluation Essentials</Link>
                        <Link to="https://www.youtube.com/watch?v=_zDDErOaUqc&ab_channel=ArizeAI" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Building LLM Query Engine</Link>
                        <Link to="https://www.youtube.com/watch?v=zR1X5R_1TUw&ab_channel=SethJuarez" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Model Monitoring for LLMs</Link>
                        <Link to="https://youtu.be/aPzbR1s1O_8?si=2VEoUt9FFRUftctv" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Pretrain a 3B LLM from scratch</Link>
                        <Link to="https://www.youtube.com/watch?v=aFuHPiJu0QA" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> A simple generative ML mode</Link>
                        <Link to="https://huggingface.co/blog/the_n_implementation_details_of_rlhf_with_ppo" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> The N implementation of RLHF with PPO</Link>
                        <Link to="https://huggingface.co/blog/optimize-llm" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Optimizing LLM in production</Link>
                        <Link to="https://www.youtube.com/watch?v=JvLiEdTKKgk&list=PLpqh-PUKX-i4TT-vZXhFwI8Jdqr7J742n&pp=iAQB" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> LLM Tutorial on YT</Link>
                        <Link to="https://youtu.be/1TU9ZrZhqw0?si=LwtZJ0V2K6xQvSBA" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Serve custom LLM for over 100 customers</Link>
                        <Link to="https://youtu.be/1TU9ZrZhqw0?si=LwtZJ0V2K6xQvSBA" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Next Lecture</Link>
                        <Link to="https://www.youtube.com/watch?v=bZQun8Y4L2A&ab_channel=MicrosoftDeveloper" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> State of GPT | BRK216HFS</Link>
                        <Link to="https://www.deeplearning.ai/short-courses/building-systems-with-chatgpt/" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Building Systems with the ChatGPT API</Link>
                        <Link to="https://www.youtube.com/watch?v=IoMSGuiwV3g&ab_channel=AleksaGordi%C4%87-TheAIEpiphany" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Flash Attention 2.0 with Tri Dao</Link>
                        <Link to="https://arxiv.org/abs/2402.10963" target="_blank" className="list-group-item"><i className='bi bi-book-fill'></i> Meet Stepwise ORMs (SORMs)</Link>
                        <Link to="https://arxiv.org/abs/2402.18041v1" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Datasets for Large Language Models</Link>
                        <Link to="https://www.youtube.com/watch?v=18YupYsH5vY&ab_channel=AleksaGordi%C4%87-TheAIEpiphany" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> GPT-Fast: blazingly fast inference</Link>
                        <Link to="https://pytorch.org/blog/accelerating-generative-ai-2/" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Docs 1</Link>
                        <Link to="https://github.com/pytorch-labs/gpt-fast" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Docs 2</Link>
                        <Link to="https://sites.google.com/view/genie-2024/" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Genie: GIE</Link>
                        <Link to="https://arxiv.org/abs/2402.15391" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Docs 1</Link>
                        <Link to="https://www.youtube.com/watch?v=4X_26j5Z43Y&ab_channel=AIPapersAcademy" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> V-JEPA</Link>
                        <Link to="https://ai.meta.com/blog/v-jepa-yann-lecun-ai-model-video-joint-embedding-predictive-architecture/" target="_blank" className="list-group-item"><i className='bi bi-book-fill'></i> Docs 1</Link>
                        <Link to="https://github.com/facebookresearch/jepa" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Docs 2</Link>
                        <Link to="https://gorilla.cs.berkeley.edu/" target="_blank" className="list-group-item"><i className='bi bi-book-fill'></i> Gorilla</Link>
                        <Link to="https://github.com/ShishirPatil/gorilla" target="_blank" className="list-group-item"><i className='bi bi-book-fill'></i> github/Gorilla</Link>
                        <Link to="https://colab.research.google.com/drive/1DEBPsccVLF_aUnmD0FwPeHFrtdC0QIUP?usp=sharing" target="_blank" className="list-group-item"><i className='bi bi-book-fill'></i> colag/Gorilla</Link>
                        <Link to="https://msandbu.org/benchmarking-llms-and-what-is-the-best-llm/" target="_blank" className="list-group-item"><i className='bi bi-book-fill'></i> Benchmarking LLMs</Link>
                        <Link to="https://huggingface.co/blog/moe" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Mixture of Experts</Link>
                        <Link to="https://huggingface.co/blog/mlabonne/merge-models" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Hugging Face/Merge-models</Link>
                        <Link to="https://colab.research.google.com/drive/1_JS7JKJAQozD48-LhYdegcuuZ2ddgXfr?usp=sharing" target="_blank" className="list-group-item"><i className='bi bi-book-fill'></i> colag/merge-models</Link>
                        <Link to="https://youtu.be/eKDz-K3UvbY?si=limrl7Raf86bdqS7" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Merge LLMs with Mergekit</Link>
                        <Link to="https://www.youtube.com/watch?v=W5ep1oJb3ME&ab_channel=FahdMirza" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Merge LLMs Locally with MergeKit</Link>
                        <Link to="https://huggingface.co/blog/kgourgou/a-first-look-at-automerger-data" target="_blank" className="list-group-item"><i className='bi bi-book-fill'></i> analysis of automerger data</Link>
                        <Link to="https://huggingface.co/blog/mlabonne/merge-models" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Merge LLM with mergekit</Link>
                        <Link to="https://colab.research.google.com/drive/1_JS7JKJAQozD48-LhYdegcuuZ2ddgXfr?usp=sharing" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> colag/merge-model</Link>
                        <Link to="https://huggingface.co/blog/mlabonne/frankenmoe" target="_blank" className="list-group-item"><i className='bi bi-book-fill'></i> Mixtures of Experts- MergeKit</Link>
                        <Link to="https://colab.research.google.com/drive/1obulZ1ROXHjYLn6PPZJwRR6GzgQogxxb#scrollTo=d5mYzDo1q96y" target="_blank" className="list-group-item"><i className='bi bi-book-fill'></i> LazyMergeKit</Link>
                    </div>

                    {/* // Collaps menu 4 */}
                    <Link to='#' className="list-group-item active border" data-bs-toggle="collapse" data-bs-target="#collapsmenu-4" aria-expanded="false" aria-controls="collapsmenu-4">
                        Transformers
                    </Link>
                    <div className="collapse" id="collapsmenu-4">
                        <Link to="" target="_blank" className="list-group-item"></Link>
                        <Link to="" target="_blank" className="list-group-item"></Link>
                        <Link to="" target="_blank" className="list-group-item"></Link>
                        <Link to="" target="_blank" className="list-group-item"></Link>
                    </div>

                    {/* // Collaps menu 5 */}
                    <Link to='#' className="list-group-item active border" data-bs-toggle="collapse" data-bs-target="#collapsmenu-5" aria-expanded="false" aria-controls="collapsmenu-5">
                        Inference Configuration
                    </Link>
                    <div className="collapse" id="collapsmenu-5">
                        <Link to="" target="_blank" className="list-group-item"></Link>
                        <Link to="" target="_blank" className="list-group-item"></Link>
                        <Link to="" target="_blank" className="list-group-item"></Link>
                        <Link to="" target="_blank" className="list-group-item"></Link>
                    </div>

                    {/* // Collaps menu 6 */}
                    <Link to='#' className="list-group-item active border" data-bs-toggle="collapse" data-bs-target="#collapsmenu-6" aria-expanded="false" aria-controls="collapsmenu-6">
                        Fine Tuning
                    </Link>
                    <div className="collapse" id="collapsmenu-6">
                        <Link to="" target="_blank" className="list-group-item"></Link>
                        <Link to="" target="_blank" className="list-group-item"></Link>
                        <Link to="" target="_blank" className="list-group-item"></Link>
                        <Link to="" target="_blank" className="list-group-item"></Link>
                    </div>

                    {/* // Collaps menu 7 */}
                    <Link to='#' className="list-group-item active border" data-bs-toggle="collapse" data-bs-target="#collapsmenu-7" aria-expanded="false" aria-controls="collapsmenu-7">
                        Retrieval augmented generation (RAG)
                    </Link>
                    <div className="collapse" id="collapsmenu-7">
                        <Link to="" target="_blank" className="list-group-item"></Link>
                        <Link to="" target="_blank" className="list-group-item"></Link>
                        <Link to="" target="_blank" className="list-group-item"></Link>
                        <Link to="" target="_blank" className="list-group-item"></Link>
                    </div>

                    {/* // Collaps menu 8 */}
                    <Link to='#' className="list-group-item active border" data-bs-toggle="collapse" data-bs-target="#collapsmenu-8" aria-expanded="false" aria-controls="collapsmenu-8">
                        LLM Applications
                    </Link>
                    <div className="collapse" id="collapsmenu-8">
                        <Link to="" target="_blank" className="list-group-item"></Link>
                        <Link to="" target="_blank" className="list-group-item"></Link>
                        <Link to="" target="_blank" className="list-group-item"></Link>
                        <Link to="" target="_blank" className="list-group-item"></Link>
                    </div>

                    {/* // Collaps menu 9 */}
                    <Link to='#' className="list-group-item active border" data-bs-toggle="collapse" data-bs-target="#collapsmenu-9" aria-expanded="false" aria-controls="collapsmenu-9">
                        Prompt engineering
                    </Link>
                    <div className="collapse" id="collapsmenu-9">
                        <Link to="" target="_blank" className="list-group-item"></Link>
                        <Link to="" target="_blank" className="list-group-item"></Link>
                        <Link to="" target="_blank" className="list-group-item"></Link>
                        <Link to="" target="_blank" className="list-group-item"></Link>
                    </div>

                    {/* // Collaps menu 10 */}
                    {/* <Link to='#' className="list-group-item active border" data-bs-toggle="collapse" data-bs-target="#collapsmenu-10" aria-expanded="false" aria-controls="collapsmenu-10">
                    
                    </Link>
                    <div className="collapse" id="collapsmenu-10">
                        <Link to="" target="_blank" className="list-group-item"></Link>
                        <Link to="" target="_blank" className="list-group-item"></Link>
                        <Link to="" target="_blank" className="list-group-item"></Link>
                        <Link to="" target="_blank" className="list-group-item"></Link>
                    </div> */}



                </ul>
            </div>
        </>
    )
}