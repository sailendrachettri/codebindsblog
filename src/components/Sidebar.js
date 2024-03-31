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
                        <Link to="https://github.com/ollama/ollama" className="list-group-item">Documentation</Link>
                        <Link to="https://www.youtube.com/watch?v=xa8pTD16SnM&ab_channel=Decoder" className="list-group-item"><i class="bi bi-youtube"></i> Installing Ollama to Customize My Own LLM</Link>
                        <Link to="https://www.youtube.com/watch?v=syR0fT0rkgY&ab_channel=Decoder" className="list-group-item"><i class="bi bi-youtube"></i> Use Your Self-Hosted LLM</Link>
                        <Link to="https://www.youtube.com/watch?v=fnvZJU5Fj3Q&ab_channel=Decoder" className="list-group-item"><i class="bi bi-youtube"></i> Importing Open Source Models to Ollama</Link>
                        <Link to="https://www.youtube.com/watch?v=JwYwPiOh72w&ab_channel=LearnDatawithMark" className="list-group-item"><i class="bi bi-youtube"></i>Ollama has a Python library </Link>
                        <Link to="https://www.youtube.com/watch?v=MiJQ_zlnBeo&ab_channel=LearnDatawithMark" className="list-group-item"><i class="bi bi-youtube"></i> Building a local ChatGPT with Chainlit, Mixtral, and Ollama</Link>
                        <Link to="https://www.youtube.com/watch?v=XFTFEKYLxyU" className="list-group-item"><i class="bi bi-youtube"></i> Langroid: Chat to a CSV file using Mixtral (via Ollama)</Link>
                        <Link to="https://www.youtube.com/watch?v=ocfzGBnhhDE" className="list-group-item"><i class="bi bi-youtube"></i> Few Shot Prompting with Llama2 and Ollama</Link>
                        <Link to="https://www.youtube.com/watch?v=7BH4C6-HP14&ab_channel=LearnDatawithMark" className="list-group-item"><i class="bi bi-youtube"></i> Hugging Face GGUF Models locally with Ollama</Link>
                        <Link to="https://www.youtube.com/watch?v=UQw04VW60U0&ab_channel=MervinPraison" className="list-group-item"><i class="bi bi-youtube"></i> Autogen: Ollama integration</Link>
                        <Link to="https://www.youtube.com/watch?v=NNBWmIve3fQ&ab_channel=MattWilliams" className="list-group-item"><i class="bi bi-youtube"></i> Writing Better Code with Ollama</Link>
                        <Link to="https://www.youtube.com/watch?v=k_1pOF1mj8k&ab_channel=SamWitteveen" className="list-group-item"><i class="bi bi-youtube"></i> Ollama meets LangChain</Link>
                        <Link to="https://www.youtube.com/watch?v=rfr4p0srlqs&ab_channel=LearnDatawithMark" className="list-group-item"><i class="bi bi-youtube"></i>Running Mixtral on your machine with Ollama </Link>
                        <Link to="https://www.youtube.com/watch?v=NFgEgqua-fg&ab_channel=LearnDatawithMark" className="list-group-item"><i class="bi bi-youtube"></i> Running Mistral AI on your machine with Ollama</Link>
                        <Link to="https://www.youtube.com/watch?v=4HfSfFvLn9Q&ab_channel=MervinPraison" className="list-group-item"><i class="bi bi-youtube"></i> How to implement Ollama RAG?</Link>
                        <Link to="https://www.youtube.com/watch?v=84vGNkW1A8s&ab_channel=MervinPraison" className="list-group-item"><i class="bi bi-youtube"></i> Ollama Web UI </Link>
                        <Link to="https://www.youtube.com/watch?v=bt4AR7sK9tk&ab_channel=DataScienceBasics" className="list-group-item"><i class="bi bi-youtube"></i>How TO Install Ollama Web UI </Link>
                        <Link to="https://www.youtube.com/watch?v=tIRx-Sm3xDQ&ab_channel=IanWootten" className="list-group-item"><i class="bi bi-youtube"></i> Ollama: Run Uncensored Llama2 on Mac</Link>
                        <Link to="https://www.youtube.com/watch?v=rIRkxZSn-A8&ab_channel=MatthewBerman" className="list-group-item"><i class="bi bi-youtube"></i>ChatGPT Clone: Using Ollama</Link>
                        <Link to="https://www.youtube.com/watch?v=7BH4C6-HP14&t=8s&ab_channel=LearnDatawithMark" className="list-group-item"><i class="bi bi-youtube"></i>Hugging Face GGUF Models locally with Ollama </Link>
                        <Link to="https://www.youtube.com/watch?v=QUJHEvCqhdw&ab_channel=MattWilliams" className="list-group-item"><i class="bi bi-youtube"></i> Using the Chat Endpoint in the Ollama API</Link>
                        <Link to="https://www.youtube.com/watch?v=0ou51l-MLCo&t=211s&ab_channel=MattWilliams" className="list-group-item"><i class="bi bi-youtube"></i> Adding Custom Models to Ollama</Link>
                        <Link to="https://www.youtube.com/watch?v=38jlvmBdBrU&ab_channel=MattWilliams" className="list-group-item"><i class="bi bi-youtube"></i> Finally Ollama has an OpenAI compatible API</Link>
                        <Link to="https://www.youtube.com/watch?v=H_cqBjDVinw&ab_channel=MattWilliams" className="list-group-item"><i class="bi bi-youtube"></i> Hosting Ollama Starts With Env Variables </Link>
                        <Link to="https://www.youtube.com/watch?v=6bF1uCHTFyk&ab_channel=MattWilliams" className="list-group-item"><i class="bi bi-youtube"></i> Understanding How Ollama Stores Models</Link>
                        <Link to="https://www.youtube.com/watch?v=Qa1h7ygwQq8&ab_channel=TechwithMarco" className="list-group-item"><i class="bi bi-youtube"></i> Run any AI model remotely for free on google colab</Link>
                        <Link to="https://www.youtube.com/watch?v=Zo3CTapKJ4I&ab_channel=PromptEngineering" className="list-group-item"><i class="bi bi-youtube"></i> Run Mixtral 8x7B MoE in Google Colab</Link>
                        <Link to="https://github.com/dvmazur/mixtral-offloading?tab=readme-ov-file" className="list-group-item">Docs 1 </Link>
                        <Link to="https://huggingface.co/lavawolfiee/Mixtral-8x7B-Instruct-v0.1-offloading-demo" className="list-group-item">Docs 2 </Link>
                        <Link to="https://www.youtube.com/watch?v=vzUJ-yjA8Bw&ab_channel=AnalyticsVidhya" className="list-group-item"><i class="bi bi-youtube"></i> Run Mixtral 8x7B Hands On Google Colab</Link>
                        <Link to="https://drive.google.com/drive/folders/1Bo4sJu9vEnjzV_h4FmBNb6dSZ8BxZxpa" className="list-group-item"> Docs - 1 </Link>
                        <Link to="https://drive.google.com/drive/folders/1AuReI63WzKRSdzRIlCxl6WuBkNMryPv9" className="list-group-item">Docs 2</Link>
                        <Link to="https://www.youtube.com/watch?v=IJYC6zf86lU&ab_channel=TimCarambat" className="list-group-item"><i class="bi bi-youtube"></i> Local LLM's with Ollama x AnythingLLM</Link>
                        <Link to="https://useanything.com/download" className="list-group-item">Any LLM, unlimited documents, and fully private</Link>
                        <Link to="https://www.youtube.com/watch?v=TFwYvHZV6j0&t=72s&ab_channel=DataScienceBasics" className="list-group-item"><i class="bi bi-youtube"></i>Ollama: Create Custom Models From HuggingFace (GGUF)</Link>
                        <Link to="https://www.youtube.com/watch?v=ZoxJcPkjirs&t=127s&ab_channel=MattWilliams" className="list-group-item"><i class="bi bi-youtube"></i> How to run Ollama on Docker</Link>
                        <Link to="https://www.youtube.com/watch?v=QRot1WtivqI&ab_channel=MattWilliams" className="list-group-item"><i class="bi bi-youtube"></i> Easy Access to GPUs for Ollama</Link>
                        <Link to="https://brev.dev/" className="list-group-item">Fine-tune, train, or deploy</Link>
                        <Link to="https://tailscale.com/" className="list-group-item">Tailscale is a zero config VPN for building secure networks</Link>
                        <Link to="https://www.youtube.com/watch?v=zEN_oKrttK0&ab_channel=PamelaFox" className="list-group-item"><i class="bi bi-youtube"></i> Using Ollama as a local LLM for chat apps</Link>
                        <Link to="https://www.youtube.com/watch?v=QSfvLWaJc2s&t=20s&ab_channel=FahdMirza" className="list-group-item"><i class="bi bi-youtube"></i> Access Ollama Model with Public IP Remotely</Link>
                        <Link to="https://www.youtube.com/watch?v=6QAIbThWomc&ab_channel=MattWilliams" className="list-group-item"><i class="bi bi-youtube"></i>Use Ollama's Embeddings to Build an App</Link>
                        <Link to="https://github.com/technovangelist/videoprojects" className="list-group-item">Docs 1 </Link>
                        <Link to="https://blog.langchain.dev/json-based-agents-with-ollama-and-langchain/" className="list-group-item">JSON agents with Ollama & LangChain</Link>
                        <Link to="https://www.youtube.com/watch?v=V1Mz8gMBDMo&ab_channel=Decoder" className="list-group-item"><i class="bi bi-youtube"></i> RAG from the Ground Up with Python and Ollama</Link>
                        <Link to="https://decoder.sh/videos/rag-from-the-ground-up-with-python-and-ollama" className="list-group-item">Docs 1 </Link>
                        <Link to="https://www.youtube.com/watch?v=kfbTZFAikcE&ab_channel=AIProductBuilders" className="list-group-item"><i class="bi bi-youtube"></i> FREE Local RAG Chatbot with Ollama</Link>
                        <Link to="https://www.linkedin.com/pulse/how-build-rag-chatbot-using-ollama-serve-llms-locally-sri-laxmi-beapc/?utm_source=share&utm_medium=member_ios&utm_campaign=share_via" className="list-group-item">Docs 1 </Link>
                    </div>

                    {/* // Collaps menu 2 */}
                    <Link to='#' className="list-group-item active border" data-bs-toggle="collapse" data-bs-target="#collapsmenu-2" aria-expanded="false" aria-controls="collapsmenu-2">
                        History of NLP
                    </Link>
                    <div className="collapse" id="collapsmenu-2">
                        <Link to="" className="list-group-item"></Link>
                        <Link to="" className="list-group-item"></Link>
                        <Link to="" className="list-group-item"></Link>
                        <Link to="" className="list-group-item"></Link>
                    </div>

                    {/* // Collaps menu 3 */}
                    <Link to='#' className="list-group-item active border" data-bs-toggle="collapse" data-bs-target="#collapsmenu-3" aria-expanded="false" aria-controls="collapsmenu-3">
                        Large language model
                    </Link>
                    <div className="collapse" id="collapsmenu-3">
                        <Link to="" className="list-group-item"></Link>
                        <Link to="" className="list-group-item"></Link>
                        <Link to="" className="list-group-item"></Link>
                        <Link to="" className="list-group-item"></Link>
                    </div>

                    {/* // Collaps menu 4 */}
                    <Link to='#' className="list-group-item active border" data-bs-toggle="collapse" data-bs-target="#collapsmenu-4" aria-expanded="false" aria-controls="collapsmenu-4">
                        Transformers
                    </Link>
                    <div className="collapse" id="collapsmenu-4">
                        <Link to="" className="list-group-item"></Link>
                        <Link to="" className="list-group-item"></Link>
                        <Link to="" className="list-group-item"></Link>
                        <Link to="" className="list-group-item"></Link>
                    </div>

                    {/* // Collaps menu 5 */}
                    <Link to='#' className="list-group-item active border" data-bs-toggle="collapse" data-bs-target="#collapsmenu-5" aria-expanded="false" aria-controls="collapsmenu-5">
                        Inference Configuration
                    </Link>
                    <div className="collapse" id="collapsmenu-5">
                        <Link to="" className="list-group-item"></Link>
                        <Link to="" className="list-group-item"></Link>
                        <Link to="" className="list-group-item"></Link>
                        <Link to="" className="list-group-item"></Link>
                    </div>

                    {/* // Collaps menu 6 */}
                    <Link to='#' className="list-group-item active border" data-bs-toggle="collapse" data-bs-target="#collapsmenu-6" aria-expanded="false" aria-controls="collapsmenu-6">
                        Fine Tuning
                    </Link>
                    <div className="collapse" id="collapsmenu-6">
                        <Link to="" className="list-group-item"></Link>
                        <Link to="" className="list-group-item"></Link>
                        <Link to="" className="list-group-item"></Link>
                        <Link to="" className="list-group-item"></Link>
                    </div>

                    {/* // Collaps menu 7 */}
                    <Link to='#' className="list-group-item active border" data-bs-toggle="collapse" data-bs-target="#collapsmenu-7" aria-expanded="false" aria-controls="collapsmenu-7">
                        Retrieval augmented generation (RAG)
                    </Link>
                    <div className="collapse" id="collapsmenu-7">
                        <Link to="" className="list-group-item"></Link>
                        <Link to="" className="list-group-item"></Link>
                        <Link to="" className="list-group-item"></Link>
                        <Link to="" className="list-group-item"></Link>
                    </div>

                    {/* // Collaps menu 8 */}
                    <Link to='#' className="list-group-item active border" data-bs-toggle="collapse" data-bs-target="#collapsmenu-8" aria-expanded="false" aria-controls="collapsmenu-8">
                        LLM Applications
                    </Link>
                    <div className="collapse" id="collapsmenu-8">
                        <Link to="" className="list-group-item"></Link>
                        <Link to="" className="list-group-item"></Link>
                        <Link to="" className="list-group-item"></Link>
                        <Link to="" className="list-group-item"></Link>
                    </div>

                    {/* // Collaps menu 9 */}
                    <Link to='#' className="list-group-item active border" data-bs-toggle="collapse" data-bs-target="#collapsmenu-9" aria-expanded="false" aria-controls="collapsmenu-9">
                        Prompt engineering
                    </Link>
                    <div className="collapse" id="collapsmenu-9">
                        <Link to="" className="list-group-item"></Link>
                        <Link to="" className="list-group-item"></Link>
                        <Link to="" className="list-group-item"></Link>
                        <Link to="" className="list-group-item"></Link>
                    </div>

                    {/* // Collaps menu 10 */}
                    {/* <Link to='#' className="list-group-item active border" data-bs-toggle="collapse" data-bs-target="#collapsmenu-10" aria-expanded="false" aria-controls="collapsmenu-10">
                    
                    </Link>
                    <div className="collapse" id="collapsmenu-10">
                        <Link to="" className="list-group-item"></Link>
                        <Link to="" className="list-group-item"></Link>
                        <Link to="" className="list-group-item"></Link>
                        <Link to="" className="list-group-item"></Link>
                    </div> */}



                </ul>
            </div>
        </>
    )
}
