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
                        <Link to="https://www.youtube.com/watch?v=ucityipiNtA&ab_channel=RicardoCalix" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> What are Transformers and GPTs?</Link>
                        <Link to="https://www.youtube.com/watch?v=zxVhAYkSYcY&ab_channel=RicardoCalix" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Original Transformer architecture for LLM</Link>
                        <Link to="https://youtu.be/ISNdQcPhsts?si=EA3BSRVo1Tr4Z4NC" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Coding a Transformer from scratch</Link>
                        <Link to="https://www.youtube.com/watch?v=s6gys0iozLk&ab_channel=RicardoCalix" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> GPTs, BERTs, Full Transformers</Link>
                        <Link to="https://www.youtube.com/watch?v=a1qomZy_yfo&ab_channel=RicardoCalix" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Part 2</Link>
                        <Link to="https://www.youtube.com/watch?v=klQnQMoy9zI&ab_channel=RicardoCalix" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Part 3</Link>
                        <Link to="https://www.youtube.com/watch?v=yNZCcF6a7a4&ab_channel=RicardoCalix" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Part 4</Link>
                        <Link to="https://www.youtube.com/watch?v=zgH69JoAB_k&ab_channel=RicardoCalix" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Part 5</Link>
                        <Link to="https://www.youtube.com/watch?v=RsQxg913eXY&ab_channel=RicardoCalix" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Implementing a simple GPT in PyTorch</Link>
                        <Link to="https://www.youtube.com/watch?v=zyDzpVu9lyA&ab_channel=RicardoCalix" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Part 2</Link>
                        <Link to="https://www.youtube.com/watch?v=oPcJg3QrKf4&ab_channel=RicardoCalix" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Hello World - GPT</Link>
                        <Link to="https://www.youtube.com/watch?v=A8YqZKGRTAM&ab_channel=RicardoCalix" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Intro to (RLHF)</Link>
                        <Link to="https://www.youtube.com/playlist?list=PLoROMvodv4rNiJRchCzutFw5ItR_Z27CM" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> CS25 - Transformers Course</Link>
                    </div>

                    {/* // Collaps menu 5 */}
                    <Link to='#' className="list-group-item active border" data-bs-toggle="collapse" data-bs-target="#collapsmenu-5" aria-expanded="false" aria-controls="collapsmenu-5">
                        Inference Configuration
                    </Link>
                    <div className="collapse" id="collapsmenu-5">
                        {/* <Link to="" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> </Link> */}
                        {/* <Link to="" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> </Link> */}
                        {/* <Link to="" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> </Link> */}
                        {/* <Link to="" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> </Link> */}
                        <Link to="" target="_blank" className="list-group-item">Work in progress...</Link>
                    </div>

                    {/* // Collaps menu 6 */}
                    <Link to='#' className="list-group-item active border" data-bs-toggle="collapse" data-bs-target="#collapsmenu-6" aria-expanded="false" aria-controls="collapsmenu-6">
                        Fine Tuning
                    </Link>
                    <div className="collapse" id="collapsmenu-6">
                        <Link to="https://www.youtube.com/watch?v=_KPEoCSKHcU&ab_channel=VenelinValkov" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Fine-tuning Tiny LLM on Your Data</Link>
                        <Link to="https://www.youtube.com/watch?v=sIFokbuATX4&ab_channel=AIAnytime" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Make LLM Fine Tuning 5x Faster</Link>
                        <Link to="https://www.youtube.com/watch?v=Pb_RGAl75VE&ab_channel=DataCamp" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Fine-Tuning Your Own Llama2 Model</Link>
                        <Link to="https://www.youtube.com/watch?v=usoTCfyQxjU&ab_channel=AIAnytime" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Fine Tune a Multimodal LLM "IDEFICS 9B"</Link>
                        <Link to="https://www.youtube.com/watch?v=iMD7ba1hHgw&t=15s&ab_channel=AIAnytime" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Anyone can Fine Tune LLMs using LLaMA Factory</Link>
                        <Link to="https://www.youtube.com/watch?v=eLy74j0KCrY&ab_channel=AIAnytime" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Fine Tune Phi-2 Model on Your Dataset</Link>
                        <Link to="https://www.youtube.com/watch?v=mrKuDK9dGlg" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> LLM Fine Tuning Crash Course</Link>
                        <Link to="https://www.youtube.com/watch?v=Us5ZFp16PaU&ab_channel=SamWitteveen" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Fine-tuning LLMs with PEFT and LoRA</Link>
                        <Link to="https://huggingface.co/blog/peft_merging" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> PEFT new merging methods</Link>
                        <Link to="https://huggingface.co/learn/cookbook/prompt_tuning_peft" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Prompt Tuning With PEFT</Link>
                        <Link to="https://colab.research.google.com/github/huggingface/cookbook/blob/main/notebooks/en/prompt_tuning_peft.ipynb" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 2 - colab docs</Link>
                        <Link to="https://www.youtube.com/watch?v=1ILVm4IeNY8&ab_channel=AIAnytime" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Train a Small Language Model</Link>
                        <Link to="https://www.youtube.com/watch?v=anplUNnkM68&ab_channel=TrelisResearch" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Whisper for Speech Transcription</Link>
                        <Link to="https://www.youtube.com/watch?v=g68qlo9Izf0&t=17s&ab_channel=DeepLearningAI" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Efficient Fine-Tuning for Llama-v2-7b</Link>
                        <Link to="https://www.youtube.com/watch?v=E5kzAbD8D0w&ab_channel=TrelisResearch" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Direct Preference Optimization (DPO)</Link>
                        <Link to="https://www.youtube.com/watch?v=74NSDMvYZ9Y&ab_channel=MatthewBerman" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Fine Tune LLaMA 2</Link>
                        <Link to="https://www.youtube.com/watch?v=kmkcNVvEz-k&ab_channel=brev" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Fine-Tune Mistral 7B on Your Own Data</Link>
                        <Link to="https://www.youtube.com/watch?v=OVqe6GTrDFM&ab_channel=PromptEngineering" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Fine-Tune TinyLlama on Custom Dataset</Link>
                        <Link to="https://www.youtube.com/watch?v=RzSDdosu_y8&ab_channel=PromptEngineering" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Fine-tune Mixtral 8x7B (MoE)</Link>
                        <Link to="https://www.youtube.com/watch?v=lCZRwrRvrWg&ab_channel=PromptEngineering" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Mistral: Fine-Tune on Custom Data</Link>
                        <Link to="https://www.youtube.com/watch?v=khPq69GgPAo&ab_channel=FahdMirza" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Self-Play Fine-Tuning (SPIN)</Link>
                        <Link to="https://github.com/uclaml/SPIN" target="_blank" className="list-group-item"><i className='bi bi-book-fill'></i> Official implementation of Self-Play SPIN</Link>
                        <Link to="https://www.youtube.com/watch?v=TRjq7t2Ms5I&t=10s&ab_channel=AIEngineer" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Build prod-ready RAG Apps</Link>
                        <Link to="https://www.youtube.com/watch?v=R4CUKAHShyE&ab_channel=PromptEngineering" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Fine-tuning 30x Fast on T4 GPUs</Link>
                        <Link to="https://www.youtube.com/watch?v=XPU8PH0_d6g&ab_channel=SethJuarez" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> To Fine Tune or not Fine Tune?</Link>
                        <Link to="https://youtu.be/VoDHpnCN6PA?si=Aq7soXO6k83mJJVs" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Fine-tune TinyLlama 1.1B locally</Link>
                        <Link to="https://youtu.be/G5ENOwfPHFE?si=2BZ6Zh5x55TDr2dl" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Llama Factory: Fine-Tune LLMs easily?</Link>
                        <Link to="https://youtu.be/z2QE12p3kMM?si=j52ptrx0GMnj9OSy" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Create custom dataset & train Llama2</Link>
                        <Link to="https://youtu.be/2_o6epQToVY?si=CZMdu1u2IU0wXUz8" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> LocalGPT: Convert your chats with Docs </Link>
                        <Link to="https://www.youtube.com/watch?v=khIDeJwBf4k&ab_channel=AIMakerspace" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> D2SLM</Link>
                        <Link to="https://www.youtube.com/watch?v=LslC2nKEEGU&t=2s&ab_channel=PromptEngineering" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> LLAMA2: FINE-TUNE ON YOUR DATA</Link>
                        <Link to="https://www.youtube.com/watch?v=3fsn19OI_C8&ab_channel=AbhishekThakur" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Finetune LLAMA-v2 on local machine</Link>
                        <Link to="https://www.youtube.com/watch?v=3fsn19OI_C8&ab_channel=AbhishekThakur" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Stable Diffusion XL (SDXL) DreamBooth</Link>
                        <Link to="https://colab.research.google.com/drive/1HCpQkLL7UXW8xJUJJ29X7QAeNJKO0frZ?usp=sharing" target="_blank" className="list-group-item"><i className='bi bi-book-fill'></i> Fine-tuning Notebook</Link>
                        <Link to="https://huggingface.co/datasets/timdettmers/openassistant-guanaco" target="_blank" className="list-group-item"><i className='bi bi-book-fill'></i> Dataset on huggingface</Link>
                        <Link to="https://docs.llamaindex.ai/en/stable/optimizing/fine-tuning/fine-tuning.html" target="_blank" className="list-group-item"><i className='bi bi-book-fill'></i> Fine tuning with LlamaIndex</Link>
                        <Link to="https://colab.research.google.com/drive/1VoYNfYDKcKRQRor98Zbf2-9VQTtGJ24k?usp=sharing" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Fine tuning Google Colab notebook</Link>
                        <Link to="https://www.youtube.com/watch?v=g1dAsgibRcw&ab_channel=RicardoCalix" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Fine Tune pre-trained GPT and BERT</Link>
                        <Link to="https://www.youtube.com/watch?v=_S01y-JY8k4&ab_channel=RicardoCalix" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Fine-Tuning HF</Link>
                        <Link to="https://www.youtube.com/watch?v=eIziN2QUt8U&ab_channel=TrelisResearch" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Fine-tune Multi-modal Vision</Link>
                        <Link to="https://huggingface.co/blog/gemma-peft" target="_blank" className="list-group-item"><i className='bi bi-book-fill'></i> Fine-Tuning Gemma Models</Link>
                        <Link to="https://newsletter.theaiedge.io/p/the-aiedge-how-to-fine-tune-large" target="_blank" className="list-group-item"><i className='bi bi-book-fill'></i> The AiEdge+: How to fine-tune LLM</Link>
                        <Link to="https://www.youtube.com/watch?v=K_8a056X4ys&ab_channel=AIMakerspace" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Aligning LLMs: ReFT</Link>
                        <Link to="https://colab.research.google.com/drive/1MdZvYtm3xrkPrxzD71SZ6H9GTkG46VRF?usp=sharing" target="_blank" className="list-group-item"><i className='bi bi-book-fill'></i> Dickens</Link>
                        <Link to="https://medium.com/analytics-vidhya/how-to-fine-tune-llms-without-coding-41cf8d4b5d23" target="_blank" className="list-group-item"><i className='bi bi-book-fill'></i> Q&A on FAQs of GST Part 1</Link>
                        <Link to="https://colab.research.google.com/drive/1RQc035W1_7CTEViYrsnRwYvOtObvXo-B?usp=sharing" target="_blank" className="list-group-item"><i className='bi bi-book-fill'></i> Q&A on FAQs of GST Part 2</Link>
                        <Link to="https://colab.research.google.com/drive/17fmNaq-2KwqJLHt4ZZ0X6FbmMlssq_vR?usp=sharing" target="_blank" className="list-group-item"><i className='bi bi-book-fill'></i> Intent Classification with LLMs</Link>
                        <Link to="https://colab.research.google.com/drive/1NLmQqbiXc-dU9C0ulNsUuubB3vbhaJbi?usp=sharing" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Democratize and Automate</Link>
                        <Link to="https://colab.research.google.com/drive/16Ofyeg2wse1UFEMwROCN5qqWHKgWZNIR?usp=sharing" target="_blank" className="list-group-item"><i className='bi bi-book-fill'></i> Assessing Health Data with ML</Link>
                        <Link to="https://www.youtube.com/watch?v=TB6URe5f3MA&ab_channel=Neo4j" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> NODES 2023 - Fine-Tuning </Link>
                        <Link to="https://github.com/huggingface/cookbook/tree/main/notebooks/en" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Fine-tuning a Code LLM</Link>
                        <Link to="https://youtu.be/cwT5JAqtTM4?si=x5NZgXKzgNx6xlt-" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Fine-tuning Zephyr-7B to znalyze</Link>
                        <Link to="https://youtu.be/pCX_3p40Efc?si=UKvB7DSVb366Zzbe" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Building an LLM fine-tuning dataset</Link>
                        <Link to="https://github.com/Sentdex/LLM-Finetuning" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Docs Part 2</Link>
                        <Link to="https://www.youtube.com/watch?v=_GkHZQYFOGM&ab_channel=TrelisResearch" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Fine tuning LLMs for Memorization</Link>
                        <Link to="https://docs.google.com/presentation/d/1Un-H9d3ghlR23VddD3aR8aSWHHg9vjIwvYC45o0Vn7g/edit?usp=sharing" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Docs </Link>
                        <Link to="https://huggingface.co/datasets/Trelis/touch-rugby-rules-memorisation" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Dataset on huggingface</Link>
                        <Link to="https://huggingface.co/blog/g-ronimo/phinetuning" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Phinetuning 2.0</Link>
                        <Link to="https://www.youtube.com/watch?v=OQdp-OeG1as&ab_channel=TrelisResearch" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Structured Responses with QLoRa</Link>
                        <Link to="https://www.youtube.com/watch?v=MDA3LUKNl1E&ab_channel=VenelinValkov" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Fine-tuning Llama 2</Link>
                        <Link to="https://github.com/curiousily/Get-Things-Done-with-Prompt-Engineering-and-LangChain" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> </Link>
                        <Link to="https://cameronrwolfe.substack.com/p/easily-train-a-specialized-llm-peft#:~:text=LoRA%3A%20Low%2DRank%20Adaptation%20of%20Large%20Language%20Models%20%5B1%5D&text=LoRA%20leaves%20the%20pretrained%20layers,of%20the%20model%3B%20see%20below" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Train a Specialized LLM</Link>
                        <Link to="https://www.youtube.com/watch?v=YyZqcNo4hdo&pp=ygUQZmluZSB0dW5pbmcgTExNXA%3D%3D" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Efficient Fine-Tuning for Llama 2</Link>
                        <Link to="https://www.youtube.com/watch?v=XpoKB3usmKc&ab_channel=ShawTalebi" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> QLoRA: Fine-tune LLM on Single GPU</Link>
                        <Link to="https://colab.research.google.com/drive/1AErkPgDderPW0dgE230OOjEysd0QV1sR?usp=sharing" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Docs</Link>
                        <Link to="https://huggingface.co/blog/pref-tuning" target="_blank" className="list-group-item"><i className='bi bi-book-fill'></i> Preference Tuning LLM with DPO</Link>
                        <Link to="https://huggingface.co/blog/dpo-trl" target="_blank" className="list-group-item"><i className='bi bi-book-fill'></i> Fine-tune Llama2 with DPO</Link>
                        <Link to="https://www.youtube.com/watch?v=Jp-6hyf_CoE&ab_channel=AIMakerspace" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Practical Fine-Tuning of LLMs</Link>
                        <Link to="https://www.canva.com/design/DAF-v_5WxcU/s2SCPuVA7ikGR0VSJOG6Rw/view?utm_content=DAF-v_5WxcU&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank" className="list-group-item"><i className='bi bi-book-fill'></i> Part 2</Link>
                        <Link to="https://colab.research.google.com/drive/1Jw9jthx_S62MPwKH9lqb6xPRwec4OiI6?usp=sharing" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 3</Link>
                        <Link to="https://huggingface.co/HuggingFaceM4/idefics-9b" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Train  MultiModal LLM with Images</Link>
                        <Link to="https://www.youtube.com/watch?v=ojjIYAbWP6U&ab_channel=MervinPraison" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Part 2</Link>
                        <Link to="https://huggingface.co/blog/ram-efficient-pytorch-fsdp" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Fine-tuning Llama 2 70B</Link>
                        <Link to="https://youtu.be/9GjLAyn12MU?si=NYd1BmNv4vfVtde4" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> FineTune model locally: mistralai</Link>
                        <Link to="https://huggingface.co/cloudyu/mistral_pretrain_demo" target="_blank" className="list-group-item"><i className='bi bi-book-fill'></i> Part 2</Link>
                        <Link to="https://huggingface.co/blog/fine-tune-whisper" target="_blank" className="list-group-item"><i className='bi bi-book-fill'></i> Whisper Multilingual ASR Transformers</Link>
                        <Link to="https://colab.research.google.com/github/sanchit-gandhi/notebooks/blob/main/fine_tune_whisper.ipynb" target="_blank" className="list-group-item"><i className='bi bi-book-fill'></i> Part 2</Link>
                        <Link to="https://huggingface.co/blog/fine-tune-w2v2-bert" target="_blank" className="list-group-item"><i className='bi bi-book-fill'></i> FT W2V2-Bert for low-resource</Link>
                        <Link to="https://youtu.be/RevZAM9taFk?si=QuNJAVrLdqs7SUgE" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Google Gemma Finetuning</Link>
                        <Link to="https://www.youtube.com/watch?v=GK860luUyEk&ab_channel=KamalrajMM" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Master Fine Tuning LLMs</Link>
                        <Link to="https://youtu.be/ae2lbmtTY5A?si=0NXaw8tOXqh800x2" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> FT optimization DoRA, NEFT</Link>
                        <Link to="https://huggingface.co/docs/trl/main/en/sft_trainer" target="_blank" className="list-group-item"><i className='bi bi-book-fill'></i> Supervised fine tuning</Link>
                        <Link to="https://www.youtube.com/watch?v=eTieetk2dSw&ab_channel=DeepLearningAI" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Building with Instruction-Tuned LLM</Link>
                        <Link to="https://dassum.medium.com/fine-tune-large-language-model-llm-on-a-custom-dataset-with-qlora-fb60abdeba07" target="_blank" className="list-group-item"><i className='bi bi-book-fill'></i> FT LLM Custom Dataset with QLoRA</Link>
                        <Link to="https://www.youtube.com/watch?v=Gpyukc6c0w8&t=16s&ab_channel=MervinPraison" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Unsloth: Train LLM 5x Fast</Link>
                        <Link to="https://www.youtube.com/watch?v=rANv5BVcR5k&ab_channel=NodematicTutorials" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Mistral Fine Tuning for Dummies</Link>
                        <Link to="https://github.com/nodematiclabs/mistral-fine-tune" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Github Docs</Link>
                        <Link to="https://www.youtube.com/watch?v=pWZfufhF45o&ab_channel=NodematicTutorials" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Fine-Tuning Gemma</Link>
                        <Link to="https://github.com/nodematiclabs/gemma-fine-tune" target="_blank" className="list-group-item"><i className='bi bi-book-fill'></i> Part 2</Link>
                        <Link to="https://github.com/unslothai/unsloth?tab=readme-ov-file#-finetune-for-free" target="_blank" className="list-group-item"><i className='bi bi-book-fill'></i> Part 3</Link>
                        <Link to="https://huggingface.co/papers/2305.18290" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> ​Direct Preference Optimization (DPO)</Link>
                        <Link to="https://huggingface.co/papers/2310.12036" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Identity Preference Optimisation (IPO)</Link>
                        <Link to="https://github.com/ContextualAI/HALOs" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Kahneman-Tversky Optimisation (KTO)</Link>
                        <Link to="https://huggingface.co/blog/pref-tuning" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Pref tuning</Link>
                        <Link to="https://github.com/mengdi-li/awesome-RLAIF" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> RLAIF</Link>
                        <Link to="https://github.com/lqtrung1998/mwp_ReFT" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> ReFT</Link>
                        <Link to="https://huggingface.co/blog/rlhf" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> RHLF</Link>
                        <Link to="https://github.com/xfactlab/orpo" target="_blank" className="list-group-item"><i className='bi bi-book-fill'></i> Odd Ratio Preference Optimization(ORPO)</Link>
                        <Link to="https://youtu.be/6kkJGkPZP88?si=CJf02_4Ub91Zz75I" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> ORPO</Link>
                        <Link to="https://arxiv.org/pdf/2106.09685.pdf" target="_blank" className="list-group-item"><i className='bi bi-book-fill'></i> LORA</Link>
                        <Link to="https://www.superannotate.com/blog/llm-fine-tuning?source=post_page-----fb60abdeba07--------------------------------" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Benifits of Finetuning</Link>
                        <Link to="https://www.e2enetworks.com/blog/rag-vs-fine-tuning-how-to-optimize-llm-performance#:~:text=Trade%2Doffs%3A%20Fine%2Dtuning%20may%20provide%20more%20control%20over,reliability%20of%20the%20knowledge%20base." target="_blank" className="list-group-item"><i className='bi bi-book-fill'></i> RAG Vs Fine-Tuning</Link>
                        <Link to="https://www.blog.dailydoseofds.com/p/full-model-fine-tuning-vs-lora-vs" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Fine-tuning vs. LoRA vs. RAG</Link>
                        <Link to="https://h2o.ai/blog/2023/streamlining-data-preparation-for-fine-tuning-of-large-language-models/" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> H2O LLM DataStudio</Link>
                        <Link to="https://h2o.ai/blog/2023/h2o-llm-datastudio-part-ii-convert-documents-to-qa-pairs-for-fine-tuning-of-llms/" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> H2O LLM DataStudio Part II</Link>
                    </div>

                    {/* // Collaps menu 7 */}
                    <Link to='#' className="list-group-item active border" data-bs-toggle="collapse" data-bs-target="#collapsmenu-7" aria-expanded="false" aria-controls="collapsmenu-7">
                        Retrieval augmented generation (RAG)
                    </Link>
                    <div className="collapse" id="collapsmenu-7">
                        <Link to="" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> </Link>
                        <Link to="" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> </Link>
                        <Link to="" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> </Link>
                        <Link to="" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> </Link>
                    </div>

                    {/* // Collaps menu 8 */}
                    <Link to='#' className="list-group-item active border" data-bs-toggle="collapse" data-bs-target="#collapsmenu-8" aria-expanded="false" aria-controls="collapsmenu-8">
                        LLM Applications
                    </Link>
                    <div className="collapse" id="collapsmenu-8">
                        <Link to="" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> </Link>
                        <Link to="" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> </Link>
                        <Link to="" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> </Link>
                        <Link to="" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> </Link>
                        <Link to="" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> </Link>
                        <Link to="" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> </Link>
                        <Link to="" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> </Link>
                        <Link to="" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> </Link>
                        <Link to="" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> </Link>
                        <Link to="" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> </Link>
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