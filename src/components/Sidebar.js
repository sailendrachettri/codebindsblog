import React from 'react'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
    return (
        <>
            <div class="container-fluid col-2 mt-4">
                <ul class="list-group">
                    <Link to="#" class="list-group-item active" aria-current="true">Ollama</Link>
                    <Link to="#" class="list-group-item">Lecture 1 - Setup</Link>
                    <Link to="#" class="list-group-item">A third item</Link>
                    <Link to="#" class="list-group-item">A fourth item</Link>
                    <Link to="#" class="list-group-item">And a fifth one</Link>
                    <Link to="#" class="list-group-item active">A second item</Link>
                    <Link to="#" class="list-group-item">A third item</Link>
                    <Link to="#" class="list-group-item">A fourth item</Link>
                    <Link to="#" class="list-group-item">And a fifth one</Link>
                    <Link to="#" class="list-group-item">A second item</Link>
                    <Link to="#" class="list-group-item">A third item</Link>
                    <Link to="#" class="list-group-item active">And a fifth one</Link>
                    <Link to="#" class="list-group-item">A second item</Link>
                    <Link to="#" class="list-group-item">A third item</Link>
                    <Link to="#" class="list-group-item">A fourth item</Link>
                    <Link to="#" class="list-group-item active">And a fifth one</Link>
                    <Link to="#" class="list-group-item">A second item</Link>
                    <Link to="#" class="list-group-item">A third item</Link>
                    <Link to="#" class="list-group-item">A fourth item</Link>
                </ul>
            </div>
        </>
    )
}
