import { Repo } from '@/pokemons';
import RepoGrid from '@/pokemons/components/RepoGrid';
import reposData from "@/data/repos.json";
import React from 'react'

const getRepos = async () => {
  const repos = reposData as Repo[];
  return repos;
}


export default async function Repos() {

  const repos = await getRepos();

  return (

    <div className="antialiased w-full h-full bg-black text-gray-400 font-inter p-10">
      <span className="text-5xl my-2">Listado Repos</span>
      <div className="container px-4 mx-auto">

        <div className="flex flex-col">
          <RepoGrid repos={repos} />
        </div>
      </div>
    </div>




  )
}
