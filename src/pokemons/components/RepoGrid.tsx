import React from 'react'
import { Repo } from '../interface/repo'
import RepoCard from './RepoCard'


interface Props {
    repos: Repo[],
}

export default function RepoGrid({ repos }: Props) {
    return (
        // <div className="antialiased w-full h-full bg-black text-gray-400 font-inter p-10">
        //   <span className="text-5xl my-2">Listado Repos</span>
        //     <div className="container px-4 mx-auto">
                <div className="flex flex-wrap gap-10 items-center justify-center">
                    {
                        repos.map(repo => (
                            <RepoCard key={repo.name} repo={repo} />
                        ))
                    }
                </div>
        //     </div>
        // </div>

    )
}
