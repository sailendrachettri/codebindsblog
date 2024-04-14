import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
    // hooks
    const [arrow, setArrow] = useState({});

    // methods
    const handlMenuToggle = (menuId) => {
        setArrow(prevMenuStates => ({
            ...prevMenuStates,
            [menuId]: !prevMenuStates[menuId]
        }));
    }

    return (
        <>
            <div className="mt-4">
                <ul className="list-group">
                    <div className="list-group-item bg-light">
                        <i className="bi bi-menu-button-wide"></i><span>Expandable Menu</span>
                    </div>

                    {/* // Collaps menu 1 */}
                    <Link to='#' onClick={()=>handlMenuToggle(1)} className="list-group-item active border d-flex bg-secondary justify-content-between" data-bs-toggle="collapse" data-bs-target="#collapsmenu-1" aria-expanded="false" aria-controls="collapsmenu-1">
                        <span>Learn Ollama</span>
                        <i className={`bi bi-chevron-compact-${arrow[1] ? 'up' : "down"}`}></i>
                    </Link>
                    <div className="collapse" id="collapsmenu-1">
                        <Link to="https://www.youtube.com/watch?v=xa8pTD16SnM&ab_channel=Decoder" target="_blank" className="list-group-item"><i className="bi bi-youtube"></i> Installing Ollama to Customize My Own LLM</Link>
                        <Link to="https://www.youtube.com/watch?v=syR0fT0rkgY&ab_channel=Decoder" target="_blank" className="list-group-item"><i className="bi bi-youtube"></i> Use Your Self-Hosted LLM</Link>
                        <Link to="https://www.youtube.com/watch?v=fnvZJU5Fj3Q&ab_channel=Decoder" target="_blank" className="list-group-item"><i className="bi bi-youtube"></i> Importing Open Source Models to Ollama</Link>
                        <Link to="https://www.youtube.com/watch?v=JwYwPiOh72w&ab_channel=LearnDatawithMark" target="_blank" className="list-group-item"><i className="bi bi-youtube"></i>Ollama has a Python library </Link>
                        <Link to="https://www.youtube.com/watch?v=MiJQ_zlnBeo&ab_channel=LearnDatawithMark" target="_blank" className="list-group-item"><i className="bi bi-youtube"></i> Building a local ChatGPT with Chainlit, Mixtral, and Ollama</Link>
                        <Link to="https://www.youtube.com/watch?v=XFTFEKYLxyU" target="_blank" className="list-group-item"><i className="bi bi-youtube"></i> Langroid: Chat to a CSV file using Mixtral (via Ollama)</Link>
                        <Link to="https://www.youtube.com/watch?v=ocfzGBnhhDE" target="_blank" className="list-group-item"><i className="bi bi-youtube"></i> Few Shot Prompting with Llama2 and Ollama</Link>
                        <Link to="https://www.youtube.com/watch?v=7BH4C6-HP14&ab_channel=LearnDatawithMark" target="_blank" className="list-group-item"><i className="bi bi-youtube"></i> Hugging Face GGUF Models locally with Ollama</Link>
                        <Link to="https://www.youtube.com/watch?v=UQw04VW60U0&ab_channel=MervinPraison" target="_blank" className="list-group-item"><i className="bi bi-youtube"></i> Autogen: Ollama integration</Link>
                        <Link to="https://www.youtube.com/watch?v=NNBWmIve3fQ&ab_channel=MattWilliams" target="_blank" className="list-group-item"><i className="bi bi-youtube"></i> Writing Better Code with Ollama</Link>
                        <Link to="https://www.youtube.com/watch?v=k_1pOF1mj8k&ab_channel=SamWitteveen" target="_blank" className="list-group-item"><i className="bi bi-youtube"></i> Ollama meets LangChain</Link>
                        <Link to="https://www.youtube.com/watch?v=rfr4p0srlqs&ab_channel=LearnDatawithMark" target="_blank" className="list-group-item"><i className="bi bi-youtube"></i>Running Mixtral on your machine with Ollama </Link>
                        <Link to="https://www.youtube.com/watch?v=NFgEgqua-fg&ab_channel=LearnDatawithMark" target="_blank" className="list-group-item"><i className="bi bi-youtube"></i> Running Mistral AI on your machine with Ollama</Link>
                        <Link to="https://www.youtube.com/watch?v=4HfSfFvLn9Q&ab_channel=MervinPraison" target="_blank" className="list-group-item"><i className="bi bi-youtube"></i> How to implement Ollama RAG?</Link>
                        <Link to="https://www.youtube.com/watch?v=84vGNkW1A8s&ab_channel=MervinPraison" target="_blank" className="list-group-item"><i className="bi bi-youtube"></i> Ollama Web UI </Link>
                        <Link to="https://www.youtube.com/watch?v=bt4AR7sK9tk&ab_channel=DataScienceBasics" target="_blank" className="list-group-item"><i className="bi bi-youtube"></i>How TO Install Ollama Web UI </Link>
                        <Link to="https://www.youtube.com/watch?v=tIRx-Sm3xDQ&ab_channel=IanWootten" target="_blank" className="list-group-item"><i className="bi bi-youtube"></i> Ollama: Run Uncensored Llama2 on Mac</Link>
                        <Link to="https://www.youtube.com/watch?v=rIRkxZSn-A8&ab_channel=MatthewBerman" target="_blank" className="list-group-item"><i className="bi bi-youtube"></i>ChatGPT Clone: Using Ollama</Link>
                        <Link to="https://www.youtube.com/watch?v=7BH4C6-HP14&t=8s&ab_channel=LearnDatawithMark" target="_blank" className="list-group-item"><i className="bi bi-youtube"></i>Hugging Face GGUF Models locally with Ollama </Link>
                        <Link to="https://www.youtube.com/watch?v=QUJHEvCqhdw&ab_channel=MattWilliams" target="_blank" className="list-group-item"><i className="bi bi-youtube"></i> Using the Chat Endpoint in the Ollama API</Link>
                        <Link to="https://www.youtube.com/watch?v=0ou51l-MLCo&t=211s&ab_channel=MattWilliams" target="_blank" className="list-group-item"><i className="bi bi-youtube"></i> Adding Custom Models to Ollama</Link>
                        <Link to="https://www.youtube.com/watch?v=38jlvmBdBrU&ab_channel=MattWilliams" target="_blank" className="list-group-item"><i className="bi bi-youtube"></i> Finally Ollama has an OpenAI compatible API</Link>
                        <Link to="https://www.youtube.com/watch?v=H_cqBjDVinw&ab_channel=MattWilliams" target="_blank" className="list-group-item"><i className="bi bi-youtube"></i> Hosting Ollama Starts With Env Variables </Link>
                        <Link to="https://www.youtube.com/watch?v=6bF1uCHTFyk&ab_channel=MattWilliams" target="_blank" className="list-group-item"><i className="bi bi-youtube"></i> Understanding How Ollama Stores Models</Link>
                        <Link to="https://www.youtube.com/watch?v=Qa1h7ygwQq8&ab_channel=TechwithMarco" target="_blank" className="list-group-item"><i className="bi bi-youtube"></i> Run any AI model remotely for free on google colab</Link>
                        <Link to="https://www.youtube.com/watch?v=Zo3CTapKJ4I&ab_channel=PromptEngineering" target="_blank" className="list-group-item"><i className="bi bi-youtube"></i> Run Mixtral 8x7B MoE in Google Colab</Link>
                        <Link to="https://github.com/dvmazur/mixtral-offloading?tab=readme-ov-file" target="_blank" className="list-group-item"><i className="bi bi-book-fill"></i> Docs 1</Link>
                        <Link to="https://huggingface.co/lavawolfiee/Mixtral-8x7B-Instruct-v0.1-offloading-demo" target="_blank" className="list-group-item"><i className="bi bi-book-fill"></i> Docs 2 </Link>
                        <Link to="https://www.youtube.com/watch?v=vzUJ-yjA8Bw&ab_channel=AnalyticsVidhya" target="_blank" className="list-group-item"><i className="bi bi-youtube"></i> Run Mixtral 8x7B Hands On Google Colab</Link>
                        <Link to="https://drive.google.com/drive/folders/1Bo4sJu9vEnjzV_h4FmBNb6dSZ8BxZxpa" target="_blank" className="list-group-item"><i className="bi bi-book-fill"></i> Docs 1 </Link>
                        <Link to="https://drive.google.com/drive/folders/1AuReI63WzKRSdzRIlCxl6WuBkNMryPv9" target="_blank" className="list-group-item"><i className="bi bi-book-fill"></i> Docs 2</Link>
                        <Link to="https://www.youtube.com/watch?v=IJYC6zf86lU&ab_channel=TimCarambat" target="_blank" className="list-group-item"><i className="bi bi-youtube"></i> Local LLM's with Ollama x AnythingLLM</Link>
                        <Link to="https://useanything.com/download" target="_blank" className="list-group-item"><i className="bi bi-book-fill"></i> Any LLM, unlimited documents, and fully private</Link>
                        <Link to="https://www.youtube.com/watch?v=TFwYvHZV6j0&t=72s&ab_channel=DataScienceBasics" target="_blank" className="list-group-item"><i className="bi bi-youtube"></i>Ollama: Create Custom Models From HuggingFace (GGUF)</Link>
                        <Link to="https://www.youtube.com/watch?v=ZoxJcPkjirs&t=127s&ab_channel=MattWilliams" target="_blank" className="list-group-item"><i className="bi bi-youtube"></i> How to run Ollama on Docker</Link>
                        <Link to="https://www.youtube.com/watch?v=QRot1WtivqI&ab_channel=MattWilliams" target="_blank" className="list-group-item"><i className="bi bi-youtube"></i> Easy Access to GPUs for Ollama</Link>
                        <Link to="https://brev.dev/" target="_blank" className="list-group-item"><i className="bi bi-book-fill"></i> Fine-tune, train, or deploy</Link>
                        <Link to="https://tailscale.com/" target="_blank" className="list-group-item"> <i className="bi bi-book-fill"></i> Tailscale is a zero config VPN for building secure networks</Link>
                        <Link to="https://www.youtube.com/watch?v=zEN_oKrttK0&ab_channel=PamelaFox" target="_blank" className="list-group-item"><i className="bi bi-youtube"></i> Using Ollama as a local LLM for chat apps</Link>
                        <Link to="https://www.youtube.com/watch?v=QSfvLWaJc2s&t=20s&ab_channel=FahdMirza" target="_blank" className="list-group-item"><i className="bi bi-youtube"></i> Access Ollama Model with Public IP Remotely</Link>
                        <Link to="https://www.youtube.com/watch?v=6QAIbThWomc&ab_channel=MattWilliams" target="_blank" className="list-group-item"><i className="bi bi-youtube"></i>Use Ollama's Embeddings to Build an App</Link>
                        <Link to="https://github.com/technovangelist/videoprojects" target="_blank" className="list-group-item"><i className="bi bi-book-fill"></i> Docs 1</Link>
                        <Link to="https://blog.langchain.dev/json-based-agents-with-ollama-and-langchain/" target="_blank" className="list-group-item"> <i className="bi bi-book-fill"></i> JSON agents with Ollama & LangChain</Link>
                        <Link to="https://www.youtube.com/watch?v=V1Mz8gMBDMo&ab_channel=Decoder" target="_blank" className="list-group-item"><i className="bi bi-youtube"></i> RAG from the Ground Up with Python and Ollama</Link>
                        <Link to="https://decoder.sh/videos/rag-from-the-ground-up-with-python-and-ollama" target="_blank" className="list-group-item"><i className="bi bi-book-fill"></i> Docs 1</Link>
                        <Link to="https://www.youtube.com/watch?v=kfbTZFAikcE&ab_channel=AIProductBuilders" target="_blank" className="list-group-item"><i className="bi bi-youtube"></i> FREE Local RAG Chatbot with Ollama</Link>
                        <Link to="https://www.linkedin.com/pulse/how-build-rag-chatbot-using-ollama-serve-llms-locally-sri-laxmi-beapc/?utm_source=share&utm_medium=member_ios&utm_campaign=share_via" target="_blank" className="list-group-item"><i className="bi bi-book-fill"></i> Docs 1</Link>
                    </div>

                    {/* // Collaps menu 2 */}
                    <Link to='#' onClick={()=>handlMenuToggle(2)} className="list-group-item active border d-flex bg-secondary justify-content-between" data-bs-toggle="collapse" data-bs-target="#collapsmenu-2" aria-expanded="false" aria-controls="collapsmenu-2">
                        <span>History of NLP</span>
                        <i className={`bi bi-chevron-compact-${arrow[2] ? 'up' : "down"}`}></i>
                    </Link>
                    <div className="collapse" id="collapsmenu-2">
                        <Link to="https://arxiv.org/pdf/2306.08302.pdf" target="_blank" className="list-group-item"><i className="bi bi-book-fill"></i> LLM Knowledge Graphs</Link>
                    </div>

                    {/* // Collaps menu 3 */}
                    <Link to='#' onClick={()=>handlMenuToggle(3)} className="list-group-item active border d-flex bg-secondary justify-content-between" data-bs-toggle="collapse" data-bs-target="#collapsmenu-3" aria-expanded="false" aria-controls="collapsmenu-3">
                        <span>Large Language Model</span>
                        <i className={`bi bi-chevron-compact-${arrow[3] ? 'up' : "down"}`}></i>
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
                    <Link to='#' onClick={()=>handlMenuToggle(4)} className="list-group-item active border d-flex bg-secondary justify-content-between" data-bs-toggle="collapse" data-bs-target="#collapsmenu-4" aria-expanded="false" aria-controls="collapsmenu-4">
                        <span>Transformers</span>
                        <i className={`bi bi-chevron-compact-${arrow[4] ? 'up' : "down"}`}></i>
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
                    {/* <Link to='#' onClick={()=>handlMenuToggle(5)} className="list-group-item active border d-flex bg-secondary justify-content-between" data-bs-toggle="collapse" data-bs-target="#collapsmenu-5" aria-expanded="false" aria-controls="collapsmenu-5">
                        <span>Inference Configuration</span>
                        <i className={`bi bi-chevron-compact-${arrow[5] ? 'up' : "down"}`}></i>
                    </Link>
                    <div className="collapse" id="collapsmenu-5">
                        <Link to="" target="_blank" className="list-group-item">Work in progress...</Link>
                    </div> */}

                    {/* // Collaps menu 6 */}
                    <Link to='#' onClick={()=>handlMenuToggle(6)} className="list-group-item active border d-flex bg-secondary justify-content-between" data-bs-toggle="collapse" data-bs-target="#collapsmenu-6" aria-expanded="false" aria-controls="collapsmenu-6">
                        <span>Fine Tuning</span>
                        <i className={`bi bi-chevron-compact-${arrow[6] ? 'up' : "down"}`}></i>
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
                        <Link to="https://github.com/curiousily/Get-Things-Done-with-Prompt-Engineering-and-LangChain" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> LangChain & Prompt Engineering</Link>
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
                    <Link to='#' onClick={()=>handlMenuToggle(7)} className="list-group-item active border d-flex bg-secondary justify-content-between" data-bs-toggle="collapse" data-bs-target="#collapsmenu-7" aria-expanded="false" aria-controls="collapsmenu-7">
                        <span>Retrieval Augmented Generation</span>
                        <i className={`bi bi-chevron-compact-${arrow[7] ? 'up' : "down"}`}></i>
                    </Link>
                    <div className="collapse" id="collapsmenu-7">
                        <Link to="https://www.youtube.com/watch?v=T-D1OfcDW1M&t=265s&ab_channel=IBMTechnology" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> What is RAG?</Link>
                        <Link to="https://www.youtube.com/watch?v=EbEPHOABgSY&ab_channel=ArizeAI" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> RAG vs Fine-tuning</Link>
                        <Link to="https://www.youtube.com/watch?v=qcn7YAJfCeE&ab_channel=LearnDatawithMark" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> RAG Applications with Qdrant</Link>
                        <Link to="https://www.youtube.com/watch?v=4HfSfFvLn9Q&ab_channel=MervinPraison" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> How to implement Ollama RAG?</Link>
                        <Link to="https://www.youtube.com/watch?v=fbbFrCfaF0w&ab_channel=AIAnytime" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Multimodal RAG App for Medical</Link>
                        <Link to="https://www.youtube.com/watch?v=8-exaASey6o&ab_channel=AIAnytime" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Track and Monitor RAG Pipelines</Link>
                        <Link to="https://www.youtube.com/watch?v=qXEUqhqjHdg&ab_channel=AIAnytime" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Unlocking RAG Potential</Link>
                        <Link to="https://www.youtube.com/watch?v=btuN-rrPhsM&ab_channel=AIAnytime" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> RAG Implementation using Zephyr</Link>
                        <Link to="https://www.youtube.com/watch?v=uYZftCq2efg&ab_channel=AIAnytime" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Better RAG with Merger Retriever</Link>
                        <Link to="https://github.com/svpino/youtube-rag" target="_blank" className="list-group-item"><i className='bi bi-book-fill'></i> Github Repo</Link>
                        <Link to="https://www.youtube.com/watch?v=BrsocJb-fAo&ab_channel=Underfitted" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> RAG application from scratch using Python</Link>
                        <Link to="https://www.youtube.com/watch?v=FgLf5HjxI8w&ab_channel=ArizeAI" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Pinecone + LlamaIndex on RAG</Link>
                        <Link to="https://youtube.com/watch?v=QpRTdZDR4tE&ab_channel=ArizeAI" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Optimizing RAG With LLMS</Link>
                        <Link to="https://www.youtube.com/watch?v=O-VYDADgc68&ab_channel=AIAnytime" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Check Hallucination of LLM & RAG</Link>
                        <Link to="https://www.youtube.com/watch?v=97ftVtITKfo&ab_channel=AIAnytime" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Evaluate LLMs and RAG Approaches</Link>
                        <Link to="https://www.youtube.com/watch?v=eTenkUPsjko&ab_channel=AIAnytime" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Evaluating Biases in LLMs using WEAT</Link>
                        <Link to="https://www.youtube.com/watch?v=h4F09fWhyhg&ab_channel=AmbarishGangulyAcademy" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> RAG with LlamaIndex</Link>
                        <Link to="https://github.com/ambarishg/llama-index" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Github/Llama-index</Link>
                        <Link to="https://llamahub.ai/l/llama-packs/llama-index-packs-searchain?from=" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Search-in-the-Chain with LlamaIndex</Link>
                        <Link to="https://github.com/DJC-GO-SOLO/llama_index/blob/main/llama-index-packs/llama-index-packs-searchain/examples/searchain.ipynb" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 2</Link>
                        <Link to="https://www.youtube.com/watch?v=hbQYDpJayFw&ab_channel=ArizeAI" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> LLM Search & Retrieval Systems</Link>
                        <Link to="https://www.youtube.com/watch?v=SOBdR-xxE04&ab_channel=SethJuarez" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Transform RAG and Search</Link>
                        <Link to="https://www.youtube.com/watch?v=BvnOln6YZ_8&ab_channel=SethJuarez" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Retrieval strategies: GenAI apps</Link>
                        <Link to="https://youtu.be/E2shqsYwxck?si=LEeA5KXOQ6idzDd2" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Building corrective RAG from scratch </Link>
                        <Link to="https://youtube.com/playlist?list=PLfaIDFEXuae2LXbO1_PKyVJiQ23ZztA0x&si=BtJ6KCTMfqBzIGya" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> RAG from scratch</Link>
                        <Link to="https://www.youtube.com/watch?v=77xSbC-9yn4&ab_channel=MervinPraison" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> CrewAI RAG</Link>
                        <Link to="https://github.com/huggingface/cookbook/tree/main/notebooks/en" target="_blank" className="list-group-item"><i className='bi bi-book-fill'></i> RAG Evaluation Using Synthetic data</Link>
                        <Link to="https://youtube.com/watch?v=7AVjk2k8Mbs&ab_channel=AIAnytime" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Contextual Similarity for RAG Evaluation</Link>
                        <Link to="https://www.youtube.com/watch?v=KeY6qPAvyq0&ab_channel=AIAnytime" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Testing Framework Giskard for LLM and RAG</Link>
                        <Link to="https://huggingface.co/learn/cookbook/rag_evaluation" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> RAG Evaluation</Link>
                        <Link to="https://colab.research.google.com/github/huggingface/cookbook/blob/main/notebooks/en/rag_evaluation.ipynb" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Part 2</Link>
                        <Link to="https://youtu.be/CEuUG4Umfxs?si=Dz_S5uOXSlo3yiIN" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Getting started with RAG in DSPy</Link>
                        <Link to="https://www.youtube.com/watch?v=LrMguHcbpO8&ab_channel=ArizeAI" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Evaluate RAG with LLM</Link>
                        <Link to="https://youtu.be/qeJgBkPLCxo?si=YzFFkJop1ptC_YBM" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Gemma with transformers</Link>
                        <Link to="https://www.youtube.com/watch?v=cQfdaTcmBpY&ab_channel=llmware" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Function Calls and Multi-Step RAG</Link>
                        <Link to="https://youtu.be/2IL0Sd3neWc?si=eXSH7WZa_bczTfTv" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Chat with documents with Chainlit</Link>
                        <Link to="https://youtu.be/f1ihg20fQiU?si=VjaYv9yr9g-Ujvdk" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Create AI Research Assistantand at 0$</Link>
                        <Link to="https://www.youtube.com/watch?v=JSKZYgARffg&ab_channel=DataScienceBasics" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Langchain + Qdrant Local</Link>
                        <Link to="https://github.com/sudarshan-koirala/youtube-stuffs" target="_blank" className="list-group-item"><i className='bi bi-books-half'></i> Part 2</Link>
                        <Link to="https://www.youtube.com/watch?v=dt1Iobn_Hw0&ab_channel=AIMakerspace" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Semantic Chunking for RAG</Link>
                        <Link to="https://www.mongodb.com/developer/products/atlas/advanced-rag-langchain-mongodb/" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Add Semantic Caching and Memory to RAG</Link>
                        <Link to="https://www.youtube.com/watch?v=Hcqmhhx30Pg&ab_channel=AIAnytime" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Q&A: Generator App using Mistral LLM</Link>
                        <Link to="https://youtu.be/w7Ap6gZFXl0?si=liBk9uDsOm9DbSi4" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> RAG with LlamaParse</Link>
                        <Link to="https://www.youtube.com/watch?v=wSi0fxkH6e0" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Better RAG with LangChain</Link>
                        <Link to="https://huggingface.co/learn/cookbook/advanced_rag" target="_blank" className="list-group-item"><i className='bi bi-book-fill'></i> Advanced RAG on HuggingFace docs</Link>
                        <Link to="https://github.com/huggingface/cookbook/tree/main/notebooks/en" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Part 2</Link>
                        <Link to="https://www.youtube.com/watch?v=IUEny5cbys8&ab_channel=ArizeAI" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> LangChain RAG featuring Shopify's Madhav</Link>
                        <Link to="https://shopify.engineering/topics/data-science-engineering" target="_blank" className="list-group-item"><i className='bi bi-book-fill'></i> Docs</Link>
                        <Link to="https://github.com/lucifertrj/Awesome-RAG" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i>RAG-VectorDB-Embedings-LlamaIndex-Langchain </Link>
                        <Link to="https://python.langchain.com/docs/use_cases/question_answering/" target="_blank" className="list-group-item"><i className='bi bi-book-fill'></i> Q&A with RAG</Link>
                        <Link to="https://python.langchain.com/docs/use_cases/question_answering/quickstart" target="_blank" className="list-group-item"><i className='bi bi-book-fill'></i> LangChain - quick start</Link>
                        <Link to="https://www.youtube.com/watch?v=8uo-GCIKim8&ab_channel=DataInsightEdge" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Google Gemma Fully LOCAL RAG ChatBot</Link>
                        <Link to="https://github.com/InsightEdge01/RAGGemmaModel/tree/main" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> RAG Gemma Model</Link>
                        <Link to="https://www.youtube.com/watch?v=vBC6Ym0cb0Y&ab_channel=DataInsightEdge" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Beyond RAG</Link>
                        <Link to="https://youtu.be/IPbv5Fs3mis?si=5_frUdnXNLoVJEpM" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> MongoDB as vector store for RAG -Atlas</Link>
                        <Link to="https://youtu.be/UlmyyYQGhzc?ref=blog.langchain.dev" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Multi Needle in a Haystack</Link>
                        <Link to="https://github.com/gkamradt/LLMTest_NeedleInAHaystack/tree/main?ref=blog.langchain.dev" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 2</Link>
                        <Link to="https://blog.langchain.dev/multi-needle-in-a-haystack/" target="_blank" className="list-group-item"><i className='bi bi-book-fill'></i> Part 3</Link>
                        <Link to="https://www.youtube.com/watch?v=MvNdgmM7uyc&ref=blog.langchain.dev" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> LangGraph for Code Generation</Link>
                        <Link to="https://blog.langchain.dev/code-execution-with-langgraph/" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Code execution with LangGraph</Link>
                        <Link to="https://youtu.be/Rcqy92Ik6Uo?si=PPeKxtD5GHArV9iN" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Use Langchain with multimodal AI to analyze imgs</Link>
                        <Link to="https://docs.google.com/presentation/d/1EJqIvYGbF5IGHX7orXaUSKVN3PVbQh7kOP7m5BEoyKQ/edit?usp=sharing" target="_blank" className="list-group-item"><i className='bi bi-book-fill'></i> Part 2</Link>
                        <Link to="https://github.com/langchain-ai/langchain/blob/master/cookbook/Multi_modal_RAG.ipynb" target="_blank" className="list-group-item"><i className='bi bi-book-fill'></i> Part 3</Link>
                        <Link to="https://youtu.be/xT6JpDELKPg?si=nULiN7_jpQXExfhH" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Analyze tables in large financial reports</Link>
                        <Link to="https://docs.google.com/presentation/d/1ug9jHtMFsGjNV7zp85hPUNjiiCGKz53wQb9mZh0B_ZI/edit?usp=sharing" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 2</Link>
                        <Link to="https://colab.research.google.com/drive/1DldMhszgSI4KKI2UziNHHM4w8Cb5OxEL#scrollTo=Ht4oSN2PvzUJ" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 3</Link>
                        <Link to="https://www.youtube.com/live/uVqrZhNdUAI?si=58gCEN7BW613l43a" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Simple app for RAG pattern</Link>
                        <Link to="https://github.com/Azure-Samples/azure-search-openai-demo" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 2</Link>
                        <Link to="https://www.youtube.com/live/9DxwgIKVSHY?si=nXqLEDVbcWwfmzqf" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> RAG with knowledge graph</Link>
                        <Link to="https://github.com/jbarrasa/goingmeta" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 2</Link>
                        <Link to="https://youtu.be/VEvFPRlCcvI?si=rz_TMnuNrQuncusa" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Building RAG with knowledge graphs</Link>
                        <Link to="https://www.llamaindex.ai/blog/ragarch-building-a-no-code-rag-pipeline-configuration-one-click-rag-code-generation-tool-powered-b6e8eeb70089" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> RAGArch: Building a No-Code RAG Pipeline</Link>
                        <Link to="https://github.com/AI-ANK/RAGArch" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 2</Link>
                        <Link to="https://huggingface.co/spaces/AI-ANK/RAGArch" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 3</Link>
                        <Link to="https://www.llamaindex.ai/blog/multimodal-rag-for-advanced-video-processing-with-llamaindex-lancedb-33be4804822e" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> RAG for Advanced Video Processing</Link>
                        <Link to="https://github.com/run-llama/llama_index/blob/main/docs/examples/multi_modal/multi_modal_video_RAG.ipynb" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 2</Link>
                        <Link to="https://github.com/run-llama/llama_parse" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Introducing LlamaCloud and LlamaPars</Link>
                        <Link to="https://github.com/run-llama/llama_parse/blob/main/examples/demo_basic.ipynb" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 2</Link>
                        <Link to="https://github.com/run-llama/llama_parse/blob/main/examples/demo_advanced.ipynb" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 3</Link>
                        <Link to="https://www.youtube.com/watch?v=pIGRwMjhMaQ&ab_channel=MervinPraison" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Chunking Strategies in RAG</Link>
                        <Link to="https://mer.vin/2024/03/chunking-strategy/" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 2</Link>
                        <Link to="https://youtu.be/BNUpRW-Dk90?si=84DKcxms8RHWmSda" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> RAG system with Google Gemma</Link>
                        <Link to="https://huggingface.co/learn/cookbook/rag_with_hugging_face_gemma_mongodb" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 2</Link>
                        <Link to="https://colab.research.google.com/github/huggingface/cookbook/blob/main/notebooks/en/rag_with_hugging_face_gemma_mongodb.ipynb" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 3</Link>
                        <Link to="https://www.youtube.com/watch?v=Ylz779Op9Pw&ab_channel=ShawTalebi" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Improve LLMs with RAG</Link>
                        <Link to="https://colab.research.google.com/drive/1peJukr-9E1zCo1iAalbgDPJmNMydvQms?usp=sharing" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 2</Link>
                        <Link to="https://github.com/run-llama/llama_index/blob/main/llama-index-packs/llama-index-packs-subdoc-summary/examples/subdoc-summary.ipynb" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 3</Link>
                        <Link to="https://www.youtube.com/watch?v=m6P1Rp91AzM&t=63s&ab_channel=TwoSetAI" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Part 4</Link>
                        <Link to="https://mlnotes.substack.com/p/advanced-rag-technique-subdoc-summary?r=164sm1&utm_campaign=post&utm_medium=web&triedRedirect=true" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 5</Link>
                        <Link to="https://huggingface.co/CohereForAI/c4ai-command-r-v01" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> C4AI Command-R</Link>
                        <Link to="https://www.youtube.com/watch?v=YQFLdE3osws&ab_channel=FahdMirza" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Part 2</Link>
                        <Link to="https://www.youtube.com/watch?v=ZPX3W77h_1E&ab_channel=Underfitted" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Evaluate an LLM-powered RAG</Link>
                        <Link to="https://github.com/svpino/llm/tree/main/evaluation" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 2</Link>
                        <Link to="https://github.com/Giskard-AI/giskard" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 3</Link>
                        <Link to="https://www.youtube.com/watch?v=37JSz9SvECI&t=80s&ab_channel=TwoSetAI" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i>RAPTOR </Link>
                        <Link to="https://github.com/parthsarthi03/raptor" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 2</Link>
                        <Link to="https://colab.research.google.com/drive/1jbjC4Sh2YVZkpyUE4EB6y8wnZgO7uPUV?usp=sharing" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Part 3</Link>
                        <Link to="https://www.microsoft.com/en-us/research/blog/graphrag-unlocking-llm-discovery-on-narrative-private-data/" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> GraphRAG</Link>
                        <Link to="https://www.microsoft.com/en-us/research/publication/can-generalist-foundation-models-outcompete-special-purpose-tuning-case-study-in-medicine/" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 2</Link>
                        <Link to="https://github.com/zhukovyuri/VIINA" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> VIINA</Link>
                        <Link to="https://github.com/microsoft/graspologic" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> microsoft/graspologic</Link>
                        <Link to="https://arxiv.org/pdf/2303.08896.pdf" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> See Comparison</Link>
                        <Link to="https://arxiv.org/pdf/2306.08302.pdf" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Framework of the Synergized LLMs</Link>
                        <Link to="https://origintrail.io/documents/Verifiable_Internet_for_Artificial_Intelligence_whitepaper_v3_pre_publication.pdf" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 2</Link>
                        <Link to="https://www.youtube.com/watch?v=mM8pZAI2C5w&ab_channel=PamelaFox" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> AI RAG Chat App Evaluation</Link>
                        <Link to="https://github.com/Azure-Samples/ai-rag-chat-evaluator" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 2</Link>
                        <Link to="https://github.com/Azure-Samples/azure-search-openai-demo/" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 3</Link>
                        <Link to="https://www.youtube.com/watch?v=GMy3v6UXkYs&ab_channel=PamelaFox" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> AI RAG Chat App: CI/CD Deployment</Link>
                        <Link to="https://github.com/Azure-Samples/azure-search-openai-demo/" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 2</Link>
                        <Link to="https://huggingface.co/learn/cookbook/rag_llamaindex_librarian" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Building A RAG Ebook “Librarian”</Link>
                        <Link to="https://colab.research.google.com/github/huggingface/cookbook/blob/main/notebooks/en/rag_llamaindex_librarian.ipynb" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 2</Link>
                        <Link to="https://www.youtube.com/watch?v=zQU_1sCLSMU&ab_channel=LangChain" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Universal Document Loader</Link>
                        <Link to="https://youtube.com/playlist?list=PLfaIDFEXuae06tclDATrMYY0idsTdLg9v&si=0ypsn2axHsDSMs6b" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Build with LangChain</Link>
                        <Link to="https://youtube.com/playlist?list=PLfaIDFEXuae16n2TWUkKq5PgJ0w6Pkwtg&si=haMafIbDjtLZ9hFU" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> LangGraph python</Link>
                        <Link to="https://www.youtube.com/watch?v=oMRJ--GJCKQ&ab_channel=DeployingAI" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Hands on with LangGraph Agent Workflows</Link>
                        <Link to="https://www.youtube.com/watch?v=wd7TZ4w1mSw&list=PLfaIDFEXuae2LXbO1_PKyVJiQ23ZztA0x&pp=iAQB" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> RAG from Scratch</Link>
                        <Link to="https://www.youtube.com/watch?v=5h-JBkySK34&list=PLfaIDFEXuae16n2TWUkKq5PgJ0w6Pkwtg&pp=iAQB" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> LangGraph (Python)</Link>
                        <Link to="https://www.youtube.com/watch?v=mmBo8nlu2j0&list=PLfaIDFEXuae06tclDATrMYY0idsTdLg9v&pp=iAQB" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> AutoPrompt Builder</Link>
                        <Link to="https://www.youtube.com/watch?v=3wAON0Lqviw&list=PLfaIDFEXuae2WCZ63usrRoriORSGmDQsg&pp=iAQB" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> LangSmith Platform Overview</Link>
                        <Link to="https://www.youtube.com/watch?v=9M8x485j_lU&list=PLfaIDFEXuae1Ed60mXaLZRXC_jv0IwxPl&pp=iAQB" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Langchain Expression Language</Link>
                        <Link to="https://newsletter.theaiedge.io/p/deep-dive-building-a-smart-chatbot" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Build a Smart Chatbot in 10 mins</Link>
                        <Link to="https://youtu.be/jbGchdTL7d0?si=8AgkTzEqy9VKN_LX" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Building long context RAG with RAPTOR</Link>
                        <Link to="https://www.youtube.com/watch?v=wRMnHbiz5ck&ab_channel=DataScienceBasics" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Easy Way To Parse PDF</Link>
                        <Link to="https://www.llamaindex.ai/blog/introducing-llamacloud-and-llamaparse-af8cedf9006b" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 2</Link>
                        <Link to="https://github.com/run-llama/llama_parse" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 3</Link>
                        <Link to="https://github.com/run-llama/llama_parse/blob/main/examples/demo_basic.ipynb" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 4</Link>
                        <Link to="https://github.com/run-llama/llama_parse/blob/main/examples/demo_advanced.ipynb" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 5</Link>
                        <Link to="https://github.com/run-llama/llama_parse/blob/main/examples/demo_advanced.ipynb" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 6</Link>
                        <Link to="https://github.com/run-llama/llama_parse/tree/main/examples" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 7</Link>
                        <Link to="https://github.com/run-llama/llama_parse/blob/main/examples/demo_api.ipynb" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 8</Link>
                        <Link to="https://github.com/sudarshan-koirala/llamaparser-example" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 9</Link>
                        <Link to="https://www.youtube.com/live/7qsxz2rURG4?si=GbuRI1hfqrwpA6XU" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> RAGs for complex PDFs with LlamaParse</Link>
                        <Link to="https://www.youtube.com/watch?v=mE7IDf2SmJg&t=22s&ab_channel=StanfordOnline" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Retrieval Augmented Language Models</Link>
                        <Link to="https://www.youtube.com/watch?v=3V-rpBofej8&ab_channel=AkshayPachaar" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Part 2</Link>
                        <Link to="https://lightning.ai/lightning-ai/studios/chat-with-your-code-using-rag?__s=u4pvflfacap82vd4gibe&utm_source=drip&utm_medium=email&utm_campaign=LlamaIndex+news+2024-03-12" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 3</Link>
                        <Link to="https://blog.streamlit.io/build-a-real-time-rag-chatbot-google-drive-sharepoint/?__s=u4pvflfacap82vd4gibe&utm_source=drip&utm_medium=email&utm_campaign=LlamaIndex+news+2024-03-12" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Build a real-time RAG chatbot</Link>
                        <Link to="https://www.youtube.com/watch?v=JLVsFIXtvKE&ab_channel=Streamlit" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Part 2</Link>
                        <Link to="https://github.com/video-db/StreamRAG" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> StreamRAG</Link>
                        <Link to="https://colab.research.google.com/github/video-db/videodb-cookbook/blob/main/quickstart/quickstart.ipynb" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 2</Link>
                        <Link to="https://colab.research.google.com/drive/1rLWrDwePwgtZAOUTL7RNpsS7tTQ3oWWQ?usp=sharing" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Semi-structured RAG</Link>
                        <Link to="https://youtu.be/2Id2KTrES2s?si=44IA8s3qHQYEUTkR" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Part 2</Link>
                        <Link to="https://docs.google.com/presentation/d/1poQa3t5fuBfAdfXvACicFKKNUPNsk0lfsNgc10TiIUE/edit#slide=id.gcb9a0b074_1_0" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Improved RAG with ALL-SORT</Link>
                        <Link to="https://huggingface.co/abacusai/Smaug-34B-v0.1" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Smaug 34B Model</Link>
                        <Link to="https://huggingface.co/intfloat/e5-large-v2" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> E5 Embedding Model</Link>
                        <Link to="https://github.com/outlines-dev/outlines" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Strucured Text Generation</Link>
                        <Link to="https://www.youtube.com/watch?v=biJmRQF8bmY&ab_channel=TrelisResearch" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Part 2</Link>
                        <Link to="https://www.youtube.com/watch?v=1uUORSZwTz4&ab_channel=LangChain" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Building STORM from scratch</Link>
                        <Link to="https://github.com/langchain-ai/langgraph/blob/main/examples/storm/storm.ipynb" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 2</Link>
                        <Link to="https://www.youtube.com/watch?v=rscLNbnk53Y&ab_channel=NodematicTutorials" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Reverse Image Search</Link>
                        <Link to="https://github.com/nodematiclabs/image-similarity-search" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> part 2</Link>
                        <Link to="https://www.youtube.com/watch?v=23BU5Csi_3w&ab_channel=RitheshSreenivasan" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Create Medical Chatbot</Link>
                        <Link to="https://huggingface.co/blog/Andyrasika/mongodb-llamaindex-rag" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Elevate Responses: RAG with LlamaIndex</Link>
                        <Link to="https://www.mongodb.com/developer/products/atlas/rag-with-polm-stack-llamaindex-openai-mongodb/" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 2</Link>
                        <Link to="https://gorilla.cs.berkeley.edu/blogs/9_raft.html" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Train and Test Configuration for RAFT</Link>
                        <Link to="https://aka.ms/raft-blog" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 2</Link>
                    </div>

                    {/* // Collaps menu 8 */}
                    <Link to='#' onClick={()=>handlMenuToggle(8)} className="list-group-item active border d-flex bg-secondary justify-content-between" data-bs-toggle="collapse" data-bs-target="#collapsmenu-8" aria-expanded="false" aria-controls="collapsmenu-8">
                        <span>LLM Applications</span>
                        <i className={`bi bi-chevron-compact-${arrow[8] ? 'up' : "down"}`}></i>
                    </Link>
                    <div className="collapse" id="collapsmenu-8">
                        <Link to="https://www.youtube.com/watch?v=ZHZKPmzlBUY&ab_channel=Decoder" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> LLM Chat App in Python</Link>
                        <Link to="https://www.youtube.com/watch?v=hyP1ekLKtiI&ab_channel=AIAnytime" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Visual Q&A with IDEFICS</Link>
                        <Link to="https://www.youtube.com/watch?v=V21GfgSFuGk&ab_channel=AIAnytime" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Outfit Anyone: A Diffusion Project</Link>
                        <Link to="https://www.youtube.com/watch?v=kvbjB-q5Dss&ab_channel=AIAnytime" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Oncology RAG App - Powered by Meditron</Link>
                        <Link to="https://www.youtube.com/watch?v=d9wCHH3iknM&ab_channel=AIAnytime" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Investment Banker RAG Chatbot</Link>
                        <Link to="https://www.youtube.com/watch?v=Rh9Jl0hJSws&ab_channel=AssemblyAI" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> RAG App for Multi-Speaker Audio Data</Link>
                        <Link to="https://www.youtube.com/watch?v=euYa4iesOm8&ab_channel=AIAnytime" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Deploy RAG App on Vercel</Link>
                        <Link to="https://www.youtube.com/watch?v=JkGU3d8IM1c&ab_channel=AIAnytime" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> LlamaIndex App with Create Llama</Link>
                        <Link to="https://www.youtube.com/watch?v=iTGbwD-sSxM&ab_channel=AIAnytime" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> AutoLLM: Ship RAG based LLM Apps</Link>
                        <Link to="https://www.youtube.com/watch?v=U9K1Cu45nMQ&ab_channel=AIAnytime" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Query Your CSV using LIDA</Link>
                        <Link to="https://www.youtube.com/watch?v=01_2-Dy57ys&ab_channel=AIAnytime" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Chat with Data App: RAG using Mistral</Link>
                        <Link to="https://www.youtube.com/watch?v=HmZzbhL8Tf8&list=PLfaIDFEXuae2Zb0phFLWAxgrJT7f416xq&pp=iAQB" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Build LLM Apps with Langchain</Link>
                        <Link to="https://www.youtube.com/watch?v=C5mqILmVUEo&ab_channel=AIAnytime" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> RAG Implementation using Mistral 7B</Link>
                        <Link to="https://www.youtube.com/watch?v=cddahTnCo10&ab_channel=AIAnytime" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Build an AI News Anchor Generator App</Link>
                        <Link to="https://www.youtube.com/watch?v=52Xq6AaRnT4&ab_channel=AIAnytime" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Screenshot to Code Generation</Link>
                        <Link to="https://www.youtube.com/watch?v=PYEnK_iQeZU&ab_channel=AIAnytime" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> ComfyUI GUI for Image and Video Generation</Link>
                        <Link to="https://www.youtube.com/watch?v=cDY8lm6vg7w&ab_channel=AIAnytime" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Build Generative AI Agents using Dialogflow CX</Link>
                        <Link to="https://www.youtube.com/watch?v=NU406wZz1eU&ab_channel=AIAnytime" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Build a Containerized Transcription API</Link>
                        <Link to="https://www.youtube.com/watch?v=wmfAJWwyaQA&ab_channel=AIAnytime" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Build Your RAG-based ChatGPT Web App</Link>
                        <Link to="https://www.youtube.com/watch?v=Iyzvka711pc&ab_channel=AIAnytime" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Create Veterinary Chatbot: Llama2</Link>
                        <Link to="https://www.youtube.com/watch?v=Nlo7WclRBXc&t=512s&pp=ygUGb2xsYW1h" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Build Your API for Llama 2 on AWS</Link>
                        <Link to="https://www.youtube.com/watch?v=Ror2xOOA-VE&ab_channel=TrelisResearch" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Deploy Llama 2 for your Entire Organisation</Link>
                        <Link to="https://www.youtube.com/watch?v=aSh66tG1B5o&pp=ygUNb2xsYW1hIG9uIEFXUw%3D%3D" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Install and Run Mistral 7B on AWS</Link>
                        <Link to="https://www.youtube.com/watch?v=rQq1m2aJ_fk&ab_channel=AIAnytime" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Deploy Llama 2 on AWS SageMaker</Link>
                        <Link to="https://www.youtube.com/watch?v=hkSnPhhjm1Y&ab_channel=AIAnytime" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Enterprise Chat App using Azure Cognitive</Link>
                        <Link to="https://www.youtube.com/watch?v=7CeAJ0EbzDA&ab_channel=AIAnytime" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Containerizing LLM-Powered Apps</Link>
                        <Link to="https://www.youtube.com/watch?v=vYIlhgVHAls&ab_channel=AIAnytime" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Part 2</Link>
                        <Link to="https://www.youtube.com/watch?v=1TU9ZrZhqw0&ab_channel=TrelisResearch" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Serve a Custom LLM</Link>
                        <Link to="https://www.youtube.com/watch?v=I83TH4x9keo&ab_channel=TrelisResearch" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Long Context Summarization</Link>
                        <Link to="https://www.youtube.com/watch?v=hHn_cV5WUDI&ab_channel=TrelisResearch" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Function Calling Datasets, Training and Inference</Link>
                        <Link to="https://www.youtube.com/watch?v=6LGGQERxrQo&ab_channel=SingleStore" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Build an OpenAI LLM on a Private Network</Link>
                        <Link to="https://www.youtube.com/watch?v=Yj_7FuFgPyI" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Amazon Bedrock</Link>
                        <Link to="https://www.youtube.com/watch?v=wZDVgy_14PE&pp=ygUNb2xsYW1hIG9uIEFXUw%3D%3D" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> FULLY LOCAL Mistral AI PDF Processing</Link>
                        <Link to="https://www.youtube.com/watch?v=XFiof0V3nhA&ab_channel=MatthewBerman" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> PrivateGPT 2.0 - FULLY LOCAL Chat With Docs</Link>
                        <Link to="https://www.youtube.com/watch?v=kPaiZe_qD34&ab_channel=WorldofAI" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> AutoLLM: Create RAG Based LLM Web App</Link>
                        <Link to="https://www.youtube.com/watch?v=h2FDjUyvsKE&ab_channel=llmware" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Use OpenChat and LM Studio</Link>
                        <Link to="https://www.youtube.com/watch?v=Bncvggy6m5Q&ab_channel=llmware" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Compare Embedding Models</Link>
                        <Link to="https://www.youtube.com/watch?v=ob45YmYD2KI&ab_channel=PromptEngineering" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> AutoGen Studio with 100% Local LLMs</Link>
                        <Link to="https://www.youtube.com/watch?v=KIvl-VY8H0Y&ab_channel=PromptEngineering" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> AutoGen Studio UI 2.0</Link>
                        <Link to="https://github.com/langchain-ai/web-explorer/tree/main" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i>  lightweight app using the WRR</Link>
                        <Link to="https://www.youtube.com/watch?v=JeruKKuMxCg&ab_channel=PromptEngineering" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Your LLM Powered Financial Analyst</Link>
                        <Link to="https://www.youtube.com/watch?v=98Ri4VVBP_8&t=431s" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> AutoGen + Panel Ep.3 - Web UI</Link>
                        <Link to="https://github.com/yeyu2/Youtube_demos" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 2</Link>
                        <Link to="https://www.youtube.com/watch?v=9lSaRP9GLCY" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Full Function UI for AutoGen</Link>
                        <Link to="https://www.youtube.com/watch?v=UIBerUGqHjc&ab_channel=YeyuLab" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> AutoGen+Function Calling+OpenSource LLMs</Link>
                        <Link to="https://www.youtube.com/watch?v=HN96PTdiseo&ab_channel=YeyuLab" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Open Source LLMs in AutoGen</Link>
                        <Link to="https://www.youtube.com/watch?v=xZDB1naRUlk" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Development with LLM</Link>
                        <Link to="https://youtu.be/w5unVTO7mLQ?si=LLictvhoG4hm2JJy" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Make an offline GPT voice assistant</Link>
                        <Link to="https://www.youtube.com/watch?v=kXuHxI5ZcG0&ab_channel=AIAnytime" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Build and Run a Medical Chatbot</Link>
                        <Link to="https://www.youtube.com/watch?v=FZrkm0vaYYQ&ab_channel=DataScienceBasics" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Chat With Websites Using ChainLit</Link>
                        <Link to="https://github.com/sudarshan-koirala/chat-with-website" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 2</Link>
                        <Link to="https://www.youtube.com/watch?v=z9wDKwgQojM&ab_channel=PromptEngineering" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> LocalGPT API</Link>
                        <Link to="https://www.youtube.com/watch?v=nHuHGoLSXb0&ab_channel=AIAnytime" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Deploy and Use any Open Source LLMs </Link>
                        <Link to="https://www.youtube.com/watch?v=0MOMBJjytkQ&ab_channel=AIAnytime" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> CPU-based SLMs for AI Agents</Link>
                        <Link to="https://www.youtube.com/watch?v=MQmfSBdIfno&t=337s&ab_channel=AIAnytime" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Function Calling using Open Source LLM</Link>
                        <Link to="https://www.assemblyai.com/docs/getting-started/apply-llms-to-audio-files" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> LeMUR</Link>
                        <Link to="https://www.langchain.com/langchain" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> LangChain</Link>
                        <Link to="https://www.llamaindex.ai/" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> LlamaIndex</Link>
                        <Link to="https://haystack.deepset.ai/" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Haystack</Link>
                        <Link to="https://www.youtube.com/watch?v=wdF-0CGkoeQ&ab_channel=AssemblyAI" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Watch on Youtube</Link>
                        <Link to="https://speakerdeck.com/pamelafox/vector-search-and-retrieval-for-generative-ai-app-microsoft-ai-tour-sf" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Vector search, RAG</Link>
                        <Link to="https://www.youtube.com/live/vuOA13Y_Qzk?si=bT6zY4piPt_yUn_Q" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Part 2</Link>
                        <Link to="https://github.com/pamelafox/vector-search-demos" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 3</Link>
                        <Link to="https://github.com/pamelafox/vector-search-demos" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 4</Link>
                        <Link to="https://github.com/Azure-Samples/azure-search-openai-demo" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 5</Link>
                        <Link to="https://youtu.be/d7nAcshOe4w?si=kArGQ_Ua8pFdvzFy" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Manage vector databases</Link>
                        <Link to="https://youtu.be/KVOWPeV9s00?si=T9K6edpHIcAr0BBS" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> LlamaIndex with LanChainin Flowwise</Link>
                        <Link to="https://huggingface.co/blog/Alex1337/create-a-web-interface-for-your-llm-in-python" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Web Interface for LLM in Python</Link>
                        <Link to="https://github.com/Avaiga/taipy" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Data & AI algo into prod-ready web apps</Link>
                        <Link to="https://www.taipy.io/" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Taipy.io</Link>
                        <Link to="https://youtu.be/wXiTuNnh2h4?si=P58oj6TLjhqOmtOD" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> I made AI to auto categorise 10K comments</Link>
                        <Link to="https://youtu.be/A_m3tCqdts4?si=23s00oY8opM8i2PR" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Build Medical RAG app using Biomistral</Link>
                        <Link to="https://youtu.be/qjRrMxT20T0?si=hQj7YxUJAj2Y2unV" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Steerable AI with Pinecone</Link>
                        <Link to="https://huggingface.co/blog/constitutional_ai" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Constitutional AI with Open LLMs</Link>
                        <Link to="https://github.com/huggingface/alignment-handbook/tree/main/recipes/constitutional-ai" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 2</Link>
                        <Link to="https://www.youtube.com/watch?v=-Rs8-M-xBFI&ab_channel=TimCarambat" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Stop paying for ChatGPT</Link>
                        <Link to="https://www.youtube.com/watch?v=n9AMtXLveMs&t=11s&ab_channel=DataScienceBasics" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Create Chat UI Using ChainLit, LangChain</Link>
                        <Link to="https://www.youtube.com/watch?v=FgG-trkAMwU&ab_channel=DataScienceBasics" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> LangSmith For Beginners</Link>
                        <Link to="https://youtu.be/D8PM89Xry7Q?si=N52WpnQn-CsUqHex" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> deploy LlamaIndex RAG App to Vercel</Link>
                        <Link to="https://www.youtube.com/watch?v=fLGj63fiYfM&ab_channel=MervinPraison" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> PhiData</Link>
                        <Link to="https://www.youtube.com/watch?v=o4-4NvrcOvs&ab_channel=AIFORDEVS" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Boost Gmail Efficiency with AI</Link>
                        <Link to="https://github.com/joaomdmoura/crewAI" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 2</Link>
                        <Link to="https://www.youtube.com/watch?v=y4WvwHqRR60&ab_channel=llmware" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Complex Research Analysis with AI Agent</Link>
                        <Link to="https://huggingface.co/llmware" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 2</Link>
                        <Link to="https://github.com/llmware-ai/llmware" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 3</Link>
                        <Link to="https://github.com/llmware-ai/llmware/tree/main/examples/SLIM-Agents/" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 4</Link>
                        <Link to="https://www.youtube.com/watch?v=MgAIrGxnN-8&ab_channel=WorldofAI" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Creating Production-Grade Apps with Taipy</Link>
                        <Link to="https://www.youtube.com/watch?v=Wtt9tuO8UPY&ab_channel=MervinPraison" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Anthropic Claude API</Link>
                        <Link to="https://www.youtube.com/watch?v=7lP7fune0Gw&ab_channel=DataInsightEdge" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Build an AI Applicant Tracking System(ATS) </Link>
                        <Link to="https://www.youtube.com/watch?v=7_926xGDbDY&ab_channel=DataInsightEdge" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Build & Chat with Invoices</Link>
                        <Link to="https://www.youtube.com/watch?v=UXLWLFOB0Xo&ab_channel=DataInsightEdge" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Chat with Multiple Docs using Gemini Pro</Link>
                        <Link to="https://www.youtube.com/watch?v=7h8ZHSkAkas&ab_channel=PromptEngineering" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> GEMINI Pro with LangChain</Link>
                        <Link to="https://www.youtube.com/watch?v=G3-YOEVg-xc&ab_channel=SamWitteveen" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Gemini Pro+LangChain - Chains</Link>
                        <Link to="https://youtu.be/r2PvHdkaXWc?si=alEiCMZwy0xAwNwG" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> LangGraph+functioncall+Yahoofinance</Link>
                        <Link to="https://www.youtube.com/watch?v=n_h_XWM2vzg&ab_channel=SuperLazyCoder" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Visual Q&A with Google Deplot</Link>
                        <Link to="https://youtu.be/U_Sg3Odf1vk?si=gzDboL0gLYTPn7Q6" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> CrewAI agents for stock analysis</Link>
                        <Link to="https://youtu.be/9RKXffJsJhs?si=Ly_ocxdSttphdhKk" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Build an LLM powered chrome extension</Link>
                        <Link to="https://www.youtube.com/live/NdF609kO8FY?si=OLcaLpy3ALBUeOUF" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Build agent forward Apps</Link>
                        <Link to="https://www.youtube.com/watch?v=LuBROahHvfo&ab_channel=MervinPraison" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Claude 3 Function Calling</Link>
                        <Link to="https://www.youtube.com/watch?v=OQJ4gp70Zg0&ab_channel=MervinPraison" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Automate Recruitment Process</Link>
                        <Link to="https://www.youtube.com/watch?v=fo0F-DAum7E&ab_channel=DeepLearningAI" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Build Prod-Grade LLM Apps</Link>
                        <Link to="https://huggingface.co/learn/cookbook/stable_diffusion_interpolation" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Images Interpolation with Stable Diffusion</Link>
                        <Link to="https://colab.research.google.com/github/huggingface/cookbook/blob/main/notebooks/en/stable_diffusion_interpolation.ipynb" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 2</Link>
                        <Link to="https://www.youtube.com/watch?v=alHnQjyn7hg&ab_channel=LangChain" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Building Google's Dramatron</Link>
                        <Link to="https://youtu.be/0HxHkNT4_EU?si=qeOsaRbRC6gt-rtA" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Ai Agent Chatbot</Link>
                        <Link to="https://youtu.be/dS06WQaxmjk?si=rh6rtw4EDDlph3xE" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Graph Chatbot</Link>
                        <Link to="https://youtu.be/YB9M5tNAZVs?si=9NzLEB6okREdlpkL" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Super SQL Chabot</Link>
                        <Link to="https://youtu.be/_WmH2WSuT_8?si=Jq-r8eib1G9bVjrj" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Super Tiny Chatbot</Link>
                        <Link to="https://www.youtube.com/watch?v=-Q81tuPB0Ok&ab_channel=MervinPraison" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Real-Time Car Speed Tracking</Link>
                        <Link to="https://github.com/roboflow/supervision/tree/develop" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 2</Link>
                        <Link to="https://github.com/ultralytics/ultralytics" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 3</Link>
                        <Link to="https://www.youtube.com/watch?v=FXbSdspVtNE&ab_channel=FahdMirza" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Build AI Chatbot with Hugging Face</Link>
                        <Link to="https://huggingface.co/facebook/blenderbot-400M-distill" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 2</Link>
                    </div>

                    {/* // Collaps menu 9 */}
                    <Link to='#' onClick={()=>handlMenuToggle(9)} className="list-group-item active border d-flex bg-secondary justify-content-between" data-bs-toggle="collapse" data-bs-target="#collapsmenu-9" aria-expanded="false" aria-controls="collapsmenu-9">
                        <span>Prompt engineering</span>
                        <i className={`bi bi-chevron-compact-${arrow[9] ? 'up' : "down"}`}></i>
                    </Link>
                    <div className="collapse" id="collapsmenu-9">
                        <Link to="https://www.youtube.com/watch?v=xLNL6hSCPhc&ab_channel=AIAnytime" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Token Cost Reduction</Link>
                        <Link to="https://www.promptingguide.ai/research/rag" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Prompting Guide</Link>
                        <Link to="https://www.youtube.com/watch?v=YVWxbHJakgg&ab_channel=EntryPointAI" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> PE, RAG, and FT: when to use</Link>
                        <Link to="https://www.youtube.com/watch?v=E9jWEmUSxyo&ab_channel=SkillCurb" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> How to Clone Any Voice </Link>
                        <Link to="https://www.youtube.com/watch?v=4UsQxuhxB7c&ab_channel=SkillCurb" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> ChatGPT Vision API</Link>
                        <Link to="https://www.youtube.com/watch?v=SEgwj6SVWyQ&ab_channel=ArizeAI" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Vibe-Based Prompt Engineering</Link>
                        <Link to="https://www.youtube.com/watch?v=YaYaZu6NbS0&ab_channel=ArizeAI" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Prompt Templates, Functions and PWM</Link>
                        <Link to="https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> ChatGPT Prompt Engineering for Developers</Link>
                    </div>

                    {/* // Collaps menu 10 */}
                    <Link to='#' onClick={()=>handlMenuToggle(10)} className="list-group-item active border d-flex bg-secondary justify-content-between" data-bs-toggle="collapse" data-bs-target="#collapsmenu-10" aria-expanded="false" aria-controls="collapsmenu-10">
                        <span>LPU</span>
                        <i className={`bi bi-chevron-compact-${arrow[10] ? 'up' : "down"}`}></i>
                    </Link>
                    <div className="collapse" id="collapsmenu-10">
                        <Link to="https://www.youtube.com/watch?v=WQDMKTEgQnY&ab_channel=AleksaGordi%C4%87-TheAIEpiphany" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> How does Groq LPU work?</Link>
                        <Link to="https://www.youtube.com/watch?v=S53BanCP14c&ab_channel=PromptEngineering" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Getting Started with Groq API</Link>
                        <Link to="https://www.youtube.com/watch?v=vKWtFVqr6Wc&t=96s&ab_channel=MervinPraison" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Groq API</Link>
                        <Link to="https://youtu.be/oPCKB9MUP6c?si=FGDDaDm1KuXVazhP" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Builx an Agent with Personalized memory</Link>
                        <Link to="https://youtu.be/a5l7E3tzsIY?si=V4Jzwu3J_ja1HsO2" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> AI chatbot with memory using Groq</Link>
                        <Link to="https://github.com/InsightEdge01/GroqchatbotwithMemory/tree/main" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 2</Link>
                        <Link to="https://youtu.be/J2sbC8X5Pp8?si=6L4sqm2izVXkDgR7" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Fastest talking AI</Link>
                        <Link to="https://aura-tts-demo.deepgram.com" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 2</Link>
                        <Link to="https://github.com/gkamradt/QuickAgent" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 3</Link>
                        <Link to="" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> </Link>
                        <Link to="" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> </Link>
                    </div>

                    {/* // Collaps menu 11 */}
                    <Link to='#' onClick={()=>handlMenuToggle(11)} className="list-group-item active border d-flex bg-secondary justify-content-between" data-bs-toggle="collapse" data-bs-target="#collapsmenu-11" aria-expanded="false" aria-controls="collapsmenu-11">
                        <span>HuggingFace</span>
                        <i className={`bi bi-chevron-compact-${arrow[11] ? 'up' : "down"}`}></i>
                    </Link>
                    <div className="collapse" id="collapsmenu-11">
                        <Link to="https://huggingface.co/docs" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Huggingface docs</Link>
                        <Link to="https://huggingface.co/blog/text-generation-inference-on-inferentia2" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Huggingface Inferentia2</Link>
                        <Link to="https://www.youtube.com/watch?v=Kd4JL7GnR8Y&ab_channel=TrelisResearch" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Pushing Models to HuggingFace</Link>
                        <Link to="https://github.com/TrelisResearch/install-guides/blob/main/Pushing_to_Hub.ipynb" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 2</Link>
                        <Link to="https://awsdocs-neuron.readthedocs-hosted.com/en/latest/" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 3</Link>
                        <Link to="https://huggingface.co/docs/optimum-neuron/index" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 4</Link>
                        <Link to="https://www.youtube.com/watch?v=66JUlAA8nOU&ab_channel=JulienSimon" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Hugging Face models on AWS</Link>
                        <Link to="https://huggingface.co/blog/leaderboards-on-the-hub-vectara" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Hugging Face leaderboard</Link>
                        <Link to="https://huggingface.co/blog/leaderboards-on-the-hub-hallucinations" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> The Hallucinations Leaderboard</Link>
                        <Link to="https://huggingface.co/blog/researcher-dataset-sharing" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Creating open ML datasets?</Link>
                        <Link to="https://huggingface.co/blog/inference-endpoints-embeddings" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Deploy Embedding Models</Link>
                        <Link to="https://youtu.be/MvNdgmM7uyc?si=b78VIhFapFo2U8NV" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Build assistant from scratch</Link>
                        <Link to="https://huggingface.co/blog/pollen-vision" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Pollen-Vision</Link>
                        <Link to="https://github.com/pollen-robotics/pollen-vision" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 2</Link>
                        <Link to="https://www.pollen-robotics.com/" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 3</Link>
                        <Link to="https://huggingface.co/blog/pollen-vision" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Experiments with Bitnet 1.5</Link>
                        <Link to="https://huggingface.co/blog/joey00072/arxiv.org/abs/2402.17764" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 2</Link>
                        <Link to="https://github.com/joey00072/ohara/tree/master/experiments/bitnet" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 3</Link>
                    </div>

                    {/* // Collaps menu 12 */}
                    <Link to='#' onClick={()=>handlMenuToggle(12)} className="list-group-item active border d-flex bg-secondary justify-content-between" data-bs-toggle="collapse" data-bs-target="#collapsmenu-12" aria-expanded="false" aria-controls="collapsmenu-12">
                        <span>Responsible AI</span>
                        <i className={`bi bi-chevron-compact-${arrow[12] ? 'up' : "down"}`}></i>
                    </Link>
                    <div className="collapse" id="collapsmenu-12">
                        <Link to="https://youtube.com/playlist?list=PL8P_Z6C4GcuVMxhwT9JO_nKuW0QMSJ-cZ&si=vtxnKLMZwB8SGz6y" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Responses AI</Link>
                        <Link to="https://github.com/aws-samples/aws-machine-learning-university-responsible-ai/" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Readmore</Link>
                    </div>

                    {/* // Collaps menu 13 */}
                    <Link to='#' onClick={()=>handlMenuToggle(13)} className="list-group-item active border d-flex bg-secondary justify-content-between" data-bs-toggle="collapse" data-bs-target="#collapsmenu-13" aria-expanded="false" aria-controls="collapsmenu-13">
                        <span>General ML, DL</span>
                        <i className={`bi bi-chevron-compact-${arrow[13] ? 'up' : "down"}`}></i>
                    </Link>
                    <div className="collapse" id="collapsmenu-13">
                        <Link to="https://www.youtube.com/watch?v=-MTW39At8F0&ab_channel=RicardoCalix" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i>  Convert any problem into ML problem</Link>
                        <Link to="https://www.youtube.com/watch?v=A8YqZKGRTAM&ab_channel=RicardoCalix" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Intro to Reinforcement Learning</Link>
                        <Link to="https://www.youtube.com/watch?v=BGtSw0XNthY&ab_channel=RicardoCalix" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> A Simple GAN in PyTorch</Link>
                        <Link to="https://www.youtube.com/@ricardocalix188/videos" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Learn More about ML and AI and Gen AI</Link>
                        <Link to="https://github.com/afshinea/stanford-cs-230-deep-learning/blob/master/en/super-cheatsheet-deep-learning.pdf" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Super VIP Cheatsheet: Deep Learning</Link>
                    </div>

                    {/* // Collaps menu 14 */}
                    <Link to='#' onClick={()=>handlMenuToggle(14)} className="list-group-item active border d-flex bg-secondary justify-content-between" data-bs-toggle="collapse" data-bs-target="#collapsmenu-14" aria-expanded="false" aria-controls="collapsmenu-14">
                        <span>Recomanded Youtube Channels</span>
                        <i className={`bi bi-chevron-compact-${arrow[14] ? 'up' : "down"}`}></i>
                    </Link>
                    <div className="collapse" id="collapsmenu-14">
                        <Link to="https://www.youtube.com/@MervinPraison" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Mervin Praison</Link>
                        <Link to="https://www.youtube.com/@jamesbriggs" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> James Briggs</Link>
                        <Link to="https://www.youtube.com/@AIAnytime" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> AI Anytime</Link>
                        <Link to="https://www.youtube.com/@AllAboutAI" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> All About AI</Link>
                        <Link to="https://www.youtube.com/@samwitteveenai" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Sam Witteveen</Link>
                        <Link to="https://www.youtube.com/@AutoGPTTutorial" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> AutoGPT Tutorials</Link>
                        <Link to="https://www.youtube.com/@AI-Makerspace" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> AI Makerspace</Link>
                        <Link to="https://www.youtube.com/@AssemblyAI" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> AssemblyAI</Link>
                        <Link to="https://www.youtube.com/@venelin_valkov" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Venelin Valkov</Link>
                        <Link to="https://youtube.com/@TrelisResearch?si=We9ORBTjY3teMpq4" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Trelus Research</Link>
                        <Link to="https://www.youtube.com/@ricardocalix188" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Ricardo Calix</Link>
                        <Link to="https://youtube.com/@connorshorten6311?si=YA9lHWPqWaAdOtSy" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Connor Shorten</Link>
                        <Link to="https://www.youtube.com/@juliensimonfr" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Julien Simon</Link>
                        <Link to="https://www.youtube.com/@matthew_berman" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Matthew Berman</Link>
                        <Link to="https://youtube.com/@datasciencebasics?si=7jtQNnu2ovM0p_ge" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> DataScience Basics</Link>
                        <Link to="https://www.youtube.com/@TheAIEpiphany" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Aleksa Gordić - The AI Epiphany</Link>
                        <Link to="https://youtube.com/@HeatonResearch?si=hfcA9vNxWsk05Uws" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Jeff Heaton</Link>
                        <Link to="https://www.youtube.com/@engineerprompt" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Prompt Engineering</Link>
                        <Link to="https://www.youtube.com/@intheworldofai" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> WorldofAI</Link>
                        <Link to="https://youtube.com/@alejandro_ao?si=1TRHMqnIpQGUjJG6" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> AlejzndroAO Software and AI</Link>
                        <Link to="https://www.youtube.com/@arizeai/videos" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Arize AI</Link>
                        <Link to="https://youtube.com/@learndatawithmark?si=Sf7QWUJd6Jn2K5CR" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Learn Data With Mark</Link>
                        <Link to="https://www.youtube.com/@skillcurb" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> SkillCurb</Link>
                        <Link to="https://www.youtube.com/@sethjuarez" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Seth Juarez</Link>
                        <Link to="https://www.youtube.com/@NicholasRenotte/" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Nicholas Renotte</Link>
                        <Link to="https://youtube.com/@technovangelist?si=UiLCumC6anKxbzB-" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Mat Williams</Link>
                        <Link to="https://youtube.com/@IanWootten?si=4xbHzdFIIX7n9SMS" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Ian Wootten</Link>
                        <Link to="https://youtube.com/@ai-for-devs?si=4TrsM8CP7VBO-2a" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> AI for Devs</Link>
                        <Link to="https://www.youtube.com/@code4AI" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> code_your_own_AI</Link>
                        <Link to="https://www.youtube.com/@howardjeremyp" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Jeremy Howard</Link>
                        <Link to="https://www.youtube.com/@leonsaiagency" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Leon Explains AI</Link>
                        <Link to="https://www.youtube.com/@AppOfTheDay" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Skill Leap AI</Link>
                        <Link to="https://www.youtube.com/@aifluxchannel" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> AI Flux</Link>
                        <Link to="https://www.youtube.com/@AIJasonZ" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> AI Jason</Link>
                        <Link to="https://www.youtube.com/@abhishekkrthakur" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Abhishek Thakur</Link>
                        <Link to="https://youtube.com/@decoder-sh?si=OtRKUHqzVgSDT8BC" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Decoder</Link>
                        <Link to="https://www.youtube.com/@fahdmirza" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Fahd Mirza</Link>
                        <Link to="https://www.youtube.com/@GaoDalie97" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Gao Dalie</Link>
                        <Link to="https://www.youtube.com/@yeyulab" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Yeyu Lab</Link>
                        <Link to="https://www.youtube.com/@EntryPointAI" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Entry Point AI</Link>
                        <Link to="https://www.youtube.com/@Steve8708" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Steve (Builder.io)</Link>
                        <Link to="https://youtu.be/VMj-3S1tku0?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Andrej Karpathy</Link>
                        <Link to="https://www.youtube.com/@aiDotEngineer" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> AI Engineer</Link>
                        <Link to="https://www.youtube.com/@kurdiez_en" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Kurdiez</Link>
                        <Link to="https://www.youtube.com/@WhisperingAI/videos" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Whispering AI</Link>
                        <Link to="https://www.youtube.com/@ShawhinTalebi" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Shaw Talebi</Link>
                        <Link to="https://www.youtube.com/@DataIndependent" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Greg Kamradt (Data Indy)</Link>
                        <Link to="https://youtube.com/@deciai?si=udeFtVlH6uTJYMfo" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Deci Ai</Link>
                        <Link to="https://www.youtube.com/@robmulla" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Rob Mulla</Link>
                        <Link to="https://edwardjhu.com/" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Edward Hu</Link>
                        <Link to="https://youtube.com/@deployingai?si=pXZDOETUDdqiB_9I" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Deploying AI</Link>
                        <Link to="https://www.youtube.com/@llmware/videos" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> llmware</Link>
                        <Link to="https://www.youtube.com/@DataInsightEdge01" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> DataInsightEdge</Link>
                        <Link to="https://www.youtube.com/@llmware" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> LLmware</Link>
                        <Link to="https://www.youtube.com/@aipapersacademy" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> AI Papers Academy</Link>
                        <Link to="https://youtube.com/@Predibase?si=HbdO89yPruuKJp6I" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Predibase</Link>
                        <Link to="https://youtube.com/@jakeeh?si=m1gSOQIkJbhPxJmt" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> JakeEh</Link>
                        <Link to="https://www.youtube.com/@underfitted" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Underfitted</Link>
                        <Link to="https://www.youtube.com/@nodematic/" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Nodematic Tutorials</Link>
                        <Link to="https://www.youtube.com/@superlazycoder1984/" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Super Lazy Coder</Link>
                    </div>

                    {/* // Collaps menu 15 */}
                    <Link to='#' onClick={()=>handlMenuToggle(15)} className="list-group-item active border d-flex bg-secondary justify-content-between" data-bs-toggle="collapse" data-bs-target="#collapsmenu-15" aria-expanded="false" aria-controls="collapsmenu-15">
                        <span>Metrics for Evaluation</span>
                        <i className={`bi bi-chevron-compact-${arrow[15] ? 'up' : "down"}`}></i>
                    </Link>
                    <div className="collapse" id="collapsmenu-15">
                        <Link to="https://huggingface.co/metrics" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> All metrics on Hugging Face Hub</Link>
                        <Link to="https://github.com/openai/openai-cookbook/tree/main" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> OpenAI Cook Book</Link>
                    </div>

                    {/* // Collaps menu 16 */}
                    <Link to='#' onClick={()=>handlMenuToggle(16)} className="list-group-item active border d-flex bg-secondary justify-content-between" data-bs-toggle="collapse" data-bs-target="#collapsmenu-16" aria-expanded="false" aria-controls="collapsmenu-16">
                        <span>Free Courses</span>
                        <i className={`bi bi-chevron-compact-${arrow[16] ? 'up' : "down"}`}></i>
                    </Link>
                    <div className="collapse" id="collapsmenu-16">
                        <Link to="https://course.fast.ai" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Jeremy Howard's Fastai</Link>
                        <Link to="https://dl.ebooksworld.ir/books/Deep.Learning.for.Coders.with.fastai.and.PyTorch.Howard.Gugger.OReilly.9781492045526.EBooksWorld.ir.pdf" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> E-Book on DL and ML</Link>
                        <Link to="https://huggingface.co/learn" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Learn by HuggingFace</Link>
                        <Link to="https://huggingface.co/learn/cookbook" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Open-Source AI Cookbook</Link>
                        <Link to="https://huggingface.co/learn/nlp-course" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> NLP Course</Link>
                        <Link to="https://huggingface.co/learn/deep-rl-course" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Deep RL Course</Link>
                        <Link to="https://huggingface.co/learn/audio-course" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Audio Course</Link>
                        <Link to="https://docs.cohere.com/docs/llmu" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> LLM University by cohere</Link>
                        <Link to="https://fullstackdeeplearning.com/llm-bootcamp/" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Full Stack LLM Bootcamp</Link>
                        <Link to="https://fullstackdeeplearning.com/llm-bootcamp/spring-2023/" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> LLM Bootcamp - spring 2023</Link>
                        <Link to="https://www.youtube.com/@The_Full_Stack/videos" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> The Full Stack</Link>
                        <Link to="https://github.com/the-full-stack/website" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Github Docs</Link>
                        <Link to="https://www.youtube.com/watch?v=twHxmU9OxDU&list=PL1T8fO7ArWleyIqOy37OVXsP4hFXymdOZ&pp=iAQB" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Lectures</Link>
                        <Link to="https://youtu.be/JnBHR_yL2w8?list=PL1T8fO7ArWleyIqOy37OVXsP4hFXymdOZ" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Learn to Spell: Prompt Engineering</Link>
                        <Link to="https://youtu.be/Fquj2u7ay40?list=PL1T8fO7ArWleyIqOy37OVXsP4hFXymdOZ" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> LLMOps</Link>
                        <Link to="https://youtu.be/l5mG4z343qg?list=PL1T8fO7ArWleyIqOy37OVXsP4hFXymdOZ" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> UX for Language User Interfaces</Link>
                        <Link to="https://youtu.be/YdeuQhlHmCA?list=PL1T8fO7ArWleyIqOy37OVXsP4hFXymdOZ" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Augmented Language Models</Link>
                        <Link to="https://youtu.be/twHxmU9OxDU?list=PL1T8fO7ArWleyIqOy37OVXsP4hFXymdOZ" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Launch an LLM App in One Hour</Link>
                        <Link to="https://youtu.be/MyFrMFab6bo?list=PL1T8fO7ArWleyIqOy37OVXsP4hFXymdOZ" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> LLM Foundations</Link>
                        <Link to="https://www.youtube.com/watch?v=pUKs4xM1r5U&list=PL1T8fO7ArWleyIqOy37OVXsP4hFXymdOZ&index=5&pp=iAQB" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Project Walkthrough: askFSDL</Link>
                        <Link to="https://youtu.be/ax_R4yz1WwM?list=PL1T8fO7ArWleyIqOy37OVXsP4hFXymdOZ" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> What's Next?</Link>
                        <Link to="https://www.youtube.com/watch?v=l5mG4z343qg&list=PL1T8fO7ArWleyIqOy37OVXsP4hFXymdOZ&index=6&pp=iAQB" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> UX for Language user interfaces</Link>
                        <Link to="https://www.youtube.com/watch?v=54UThDl00qI&list=PL1T8fO7ArWleyIqOy37OVXsP4hFXymdOZ&index=9&pp=iAQB" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Fireside Chat with Peter Welinder</Link>
                        <Link to="https://www.youtube.com/watch?v=DWUdGhRrv2c&list=PL1T8fO7ArWleyIqOy37OVXsP4hFXymdOZ&index=10&pp=iAQB" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Harrison Chase: Agents</Link>
                        <Link to="https://www.youtube.com/watch?v=roEKOzxilq4&list=PL1T8fO7ArWleyIqOy37OVXsP4hFXymdOZ&index=11&pp=iAQB" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Reza Shabani: How To Train Your Own LLM</Link>
                        <Link to="https://youtube.com/@machinelearninguniversity1942?si=pD5dszE0HTiOclcu" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> ML University by AWS</Link>
                        <Link to="https://github.com/aws-samples/aws-machine-learning-university-accelerated-nlp" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 2 Docs</Link>
                        <Link to="https://github.com/aws-samples/aws-machine-learning-university-accelerated-cv" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 3 Docs</Link>
                        <Link to="https://github.com/aws-samples/aws-machine-learning-university-accelerated-tab" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 4 Docs</Link>
                        <Link to="https://github.com/aws-samples/aws-machine-learning-university-dte" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 5 Docs</Link>
                        <Link to="https://github.com/aws-samples/aws-machine-learning-university-responsible-ai" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 6 Docs</Link>
                        <Link to="https://www.youtube.com/watch?v=dgs_9quxZXk&ab_channel=VenelinValkov" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Real-World PyTorch</Link>
                        <Link to="https://github.com/curiousily/Get-Things-Done-with-Prompt-Engineering-and-LangChain" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Part 2 Docs</Link>
                        <Link to="https://www.youtube.com/@cs50" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> CS50: Harvard University</Link>
                        <Link to="https://magazine.sebastianraschka.com/archive" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Ahead of AI magazine</Link>
                        <Link to="https://www.edx.org/learn/computer-science/harvard-university-cs50-s-introduction-to-computer-science" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> CS50: EDX.org</Link>
                        <Link to="https://youtu.be/mEsleV16qdo?si=K4ZFHW2ZRG7EtL3Q" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Generative AI Full course - Gemini Pro</Link>
                        <Link to="https://www.linkedin.com/company/the-aiedge-newsletter/posts/?feedView=all" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> The AiEdge</Link>
                        <Link to="https://www.youtube.com/watch?v=UU1WVnMk4E8&t=24s" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Create LLM from Scratch</Link>
                        <Link to="https://youtu.be/ScKCy2udln8" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Prompt Engineering for Web Devs</Link>
                        <Link to="https://youtu.be/IA3WxTTPXqQ" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> Deep Learning for Computer Vision</Link>
                        <Link to="https://youtu.be/hDKCxebp88A" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> ML with Python and Scikit-Learn</Link>
                        <Link to="https://youtu.be/-dJPoLm_gtE" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> MLOps Course</Link>
                        <Link to="https://www.youtube.com/@code4AI" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> code_your_own_AI</Link>
                        <Link to="https://youtu.be/qpp1G0iEL_c" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> The Ethics of AI & ML</Link>
                        <Link to="https://www.cloudskillsboost.google/paths/118" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Google Cloud Generative AI</Link>
                        <Link to="" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> </Link>
                        <Link to="" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> </Link>
                    </div>

                    {/* // Collaps menu 17 */}
                    <Link to='#' onClick={()=>handlMenuToggle(17)} className="list-group-item active border d-flex bg-secondary justify-content-between" data-bs-toggle="collapse" data-bs-target="#collapsmenu-17" aria-expanded="false" aria-controls="collapsmenu-17">
                        <span>Must Read Blogs</span>
                        <i className={`bi bi-chevron-compact-${arrow[17] ? 'up' : "down"}`}></i>
                    </Link>
                    <div className="collapse" id="collapsmenu-17">
                        <Link to="https://www.microsoft.com/en-us/research/blog/" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Microsoft Resesrch Blog</Link>
                        <Link to="https://k33g.hashnode.dev/series/ai-experiments" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Philippe Charrière's Blog</Link>
                        <Link to="https://www.confident-ai.com/blog" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Confident AI blog</Link>
                        <Link to="https://huggingface.co/blog" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Huggingface blog</Link>
                        <Link to="https://blog.langchain.dev/" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Langchain blog</Link>
                        <Link to="https://www.llamaindex.ai/blog" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> LlamaIndex blog</Link>
                    </div>

                    {/* // Collaps menu 18 */}
                    <Link to='#' onClick={()=>handlMenuToggle(18)} className="list-group-item active border d-flex bg-secondary justify-content-between" data-bs-toggle="collapse" data-bs-target="#collapsmenu-18" aria-expanded="false" aria-controls="collapsmenu-18">
                        <span>AGI</span>
                        <i className={`bi bi-chevron-compact-${arrow[18] ? 'up' : "down"}`}></i>
                    </Link>
                    <div className="collapse" id="collapsmenu-18">
                        <Link to="https://www.youtube.com/watch?v=yauNW4C-Tfo&ab_channel=MatthewBerman" target="_blank" className="list-group-item"><i className='bi bi-youtube'></i> OpenAI-backed "AGI ROBOT"</Link>
                    </div>

                    {/* // Collaps menu 19 */}
                    <Link to='#' onClick={()=>handlMenuToggle(19)} className="list-group-item active border d-flex bg-secondary justify-content-between" data-bs-toggle="collapse" data-bs-target="#collapsmenu-19" aria-expanded="false" aria-controls="collapsmenu-19">
                        <span>Explainable AI</span>
                        <i className={`bi bi-chevron-compact-${arrow[19] ? 'up' : "down"}`}></i>
                    </Link>
                    <div className="collapse" id="collapsmenu-19">
                        <Link to="https://arxiv.org/pdf/1602.04938.pdf" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Explainable AI</Link>
                        <Link to="https://arxiv.org/pdf/1704.02685.pdf" target="_blank" className="list-group-item"><i className='bi bi-book-half'></i> Deep SHAP</Link>
                    </div>

                    {/* // Collaps menu 20 */}
                    {/* <Link to='#' onClick={()=>handlMenuToggle(20)} className="list-group-item active border d-flex bg-secondary justify-content-between" data-bs-toggle="collapse" data-bs-target="#collapsmenu-20" aria-expanded="false" aria-controls="collapsmenu-20">
                    <span> Title here..</span>
                    <i className={`bi bi-chevron-compact-${arrow[20] ? 'up' : "down"}`}></i>
                    </Link>
                    <div className="collapse" id="collapsmenu-20">
                        <Link to="" target="_blank" className="list-group-item">Work in Progress...</Link>
                    </div> */}
                </ul>
            </div>
        </>
    )
}