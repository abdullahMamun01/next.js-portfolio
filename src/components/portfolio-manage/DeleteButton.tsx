"use client"
import { Trash2 } from 'lucide-react'
import React, { FormEvent } from 'react'

interface Props  {
    deleteAction : (id:string) => Promise<void> ,
    id: string 
}


export default function DeleteButton({deleteAction , id}: Props) {
    const handleDelete  = async (event:FormEvent) => {
        event.preventDefault()
       await deleteAction(id)
    }
  return (
    <form onSubmit={handleDelete}>
        <button className='bg-red-300 px-2 py-3' type='submit'> <Trash2 className='w-5 h-5' /> </button>
    </form>
  )
}
