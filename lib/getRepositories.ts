
interface Repository {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    private: boolean;
    html_url: string;
    owner: {
        login: string;
        id: number;
        node_id: string;
        avatar_url: string;
        // Add other properties for the owner if needed
    };
    created_at: string;
    // Add other properties for the repository if needed
}

export const getRepositories = async (): Promise<Repository[]> => {
    const repos = await fetch('https://api.github.com/users/soychrisdev/repos', { cache: "force-cache" }).then((res) => res.json())

    return repos
}