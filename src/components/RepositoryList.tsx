import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';
import { useEffect, useState } from "react";

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {
    const [repoList, setRepoList] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepoList(data))
    }, [])

    return (
        <section className="repository-list">
            <h1>Repository list</h1>

            <ul>
                {repoList.map((repository) => (
                    <RepositoryItem repository={repository} key={repository.name} />
                ))}
            </ul>
        </section>
    )
}