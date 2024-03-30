import React from 'react'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
    return (
        <>
            <div class="container-fluid col-2 mt-4">
                <ul class="list-group">

                    {/* // Collaps menu 1 */}
                    <Link to='#' class="list-group-item active border" data-bs-toggle="collapse" data-bs-target="#collapsmenu-1" aria-expanded="false" aria-controls="collapsmenu-1">
                        Learn Ollama
                    </Link>
                    <div class="collapse" id="collapsmenu-1">
                        <Link to="https://github.com/ollama/ollama" class="list-group-item">Documentation</Link>
                        <Link to="https://www.youtube.com/watch?v=xa8pTD16SnM&ab_channel=Decoder" class="list-group-item">Installing Ollama to Customize My Own LLM</Link>
                        <Link to="https://www.youtube.com/watch?v=syR0fT0rkgY&ab_channel=Decoder" class="list-group-item">Use Your Self-Hosted LLM</Link>
                        <Link to="https://www.youtube.com/watch?v=fnvZJU5Fj3Q&ab_channel=Decoder" class="list-group-item">Importing Open Source Models to Ollama</Link>
                    </div>

                    {/* // Collaps menu 2 */}
                    <Link to='#' class="list-group-item active border" data-bs-toggle="collapse" data-bs-target="#collapsmenu-2" aria-expanded="false" aria-controls="collapsmenu-2">
                    History of NLP
                    </Link>
                    <div class="collapse" id="collapsmenu-2">
                        <Link to="" class="list-group-item"></Link>
                        <Link to="" class="list-group-item"></Link>
                        <Link to="" class="list-group-item"></Link>
                        <Link to="" class="list-group-item"></Link>
                    </div>

                    {/* // Collaps menu 3 */}
                    <Link to='#' class="list-group-item active border" data-bs-toggle="collapse" data-bs-target="#collapsmenu-3" aria-expanded="false" aria-controls="collapsmenu-3">
                    Large language model
                    </Link>
                    <div class="collapse" id="collapsmenu-3">
                        <Link to="" class="list-group-item"></Link>
                        <Link to="" class="list-group-item"></Link>
                        <Link to="" class="list-group-item"></Link>
                        <Link to="" class="list-group-item"></Link>
                    </div>

                    {/* // Collaps menu 4 */}
                    <Link to='#' class="list-group-item active border" data-bs-toggle="collapse" data-bs-target="#collapsmenu-4" aria-expanded="false" aria-controls="collapsmenu-4">
                    Transformers
                    </Link>
                    <div class="collapse" id="collapsmenu-4">
                        <Link to="" class="list-group-item"></Link>
                        <Link to="" class="list-group-item"></Link>
                        <Link to="" class="list-group-item"></Link>
                        <Link to="" class="list-group-item"></Link>
                    </div>

                    {/* // Collaps menu 5 */}
                    <Link to='#' class="list-group-item active border" data-bs-toggle="collapse" data-bs-target="#collapsmenu-5" aria-expanded="false" aria-controls="collapsmenu-5">
                    Inference Configuration
                    </Link>
                    <div class="collapse" id="collapsmenu-5">
                        <Link to="" class="list-group-item"></Link>
                        <Link to="" class="list-group-item"></Link>
                        <Link to="" class="list-group-item"></Link>
                        <Link to="" class="list-group-item"></Link>
                    </div>

                    {/* // Collaps menu 6 */}
                    <Link to='#' class="list-group-item active border" data-bs-toggle="collapse" data-bs-target="#collapsmenu-6" aria-expanded="false" aria-controls="collapsmenu-6">
                    Fine Tuning
                    </Link>
                    <div class="collapse" id="collapsmenu-6">
                        <Link to="" class="list-group-item"></Link>
                        <Link to="" class="list-group-item"></Link>
                        <Link to="" class="list-group-item"></Link>
                        <Link to="" class="list-group-item"></Link>
                    </div>

                    {/* // Collaps menu 7 */}
                    <Link to='#' class="list-group-item active border" data-bs-toggle="collapse" data-bs-target="#collapsmenu-7" aria-expanded="false" aria-controls="collapsmenu-7">
                    Retrieval augmented generation (RAG)
                    </Link>
                    <div class="collapse" id="collapsmenu-7">
                        <Link to="" class="list-group-item"></Link>
                        <Link to="" class="list-group-item"></Link>
                        <Link to="" class="list-group-item"></Link>
                        <Link to="" class="list-group-item"></Link>
                    </div>

                    {/* // Collaps menu 8 */}
                    <Link to='#' class="list-group-item active border" data-bs-toggle="collapse" data-bs-target="#collapsmenu-8" aria-expanded="false" aria-controls="collapsmenu-8">
                    LLM Applications
                    </Link>
                    <div class="collapse" id="collapsmenu-8">
                        <Link to="" class="list-group-item"></Link>
                        <Link to="" class="list-group-item"></Link>
                        <Link to="" class="list-group-item"></Link>
                        <Link to="" class="list-group-item"></Link>
                    </div>

                    {/* // Collaps menu 9 */}
                    <Link to='#' class="list-group-item active border" data-bs-toggle="collapse" data-bs-target="#collapsmenu-9" aria-expanded="false" aria-controls="collapsmenu-9">
                    Prompt engineering
                    </Link>
                    <div class="collapse" id="collapsmenu-9">
                        <Link to="" class="list-group-item"></Link>
                        <Link to="" class="list-group-item"></Link>
                        <Link to="" class="list-group-item"></Link>
                        <Link to="" class="list-group-item"></Link>
                    </div>
                    
                    {/* // Collaps menu 10 */}
                    {/* <Link to='#' class="list-group-item active border" data-bs-toggle="collapse" data-bs-target="#collapsmenu-10" aria-expanded="false" aria-controls="collapsmenu-10">
                    
                    </Link>
                    <div class="collapse" id="collapsmenu-10">
                        <Link to="" class="list-group-item"></Link>
                        <Link to="" class="list-group-item"></Link>
                        <Link to="" class="list-group-item"></Link>
                        <Link to="" class="list-group-item"></Link>
                    </div> */}



                </ul>
            </div>
        </>
    )
}
