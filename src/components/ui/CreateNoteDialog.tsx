'use client'
import React from 'react'
import { Dialog, DialogContent ,DialogDescription,DialogHeader,DialogTitle,DialogTrigger} from './dialog'
import { Loader2, Plus } from 'lucide-react'
import { Input } from './input'
import { Button } from './button'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'

type Props = {}

const CreateNoteDialog = (props: Props) => {
const router = useRouter()
const [input, setInput] = React.useState('')
const uploadToFirebase = useMutation({
    mutationFn: async (noteId:string)=> {
        const response = await axios.post('/api/uploadToFirebase', {
            noteId
        })
        return response.data
    }
})

const createNoteBook = useMutation({
    mutationFn:async () => {
        const response = await axios.post('/api/createNoteBook', {
            name:input
        })
        return response.data
    }
})

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(input === '') {
        window.alert('Please enter a name for your notebook')
        return
    }
    createNoteBook.mutate(undefined, {
        onSuccess: ({note_id}) => {
            console.log("created note id", note_id)
            uploadToFirebase.mutate(note_id)
            router.push(`/notes/${note_id}`)
        },
        onError: (error) => {
            console.log(error)
        }
        

    })
}

  return (
    <Dialog>
        <DialogTrigger>
            <div className="border-dashed flex border-2 border-green-600 h-full rounded-lg items-center justify-center sm:flex-col hover:shadow-xl transition hover:-translate-y-1 flex-row p-4">
                <Plus className='w-6 h-6 text-green-600' strokeWidth={3}/>
                <h2 className='font-semibold text-green-600 sm:mt-2'>Add new notebook</h2>
            </div>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                New Note Book
                </DialogTitle>
                <DialogDescription>
                You can create a new note
                </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
                <Input value={input} onChange={e => setInput(e.target.value)}placeholder='Name...'/>
                <div className="h-4"></div>
                <div className="flex items-center gap-2">
                    <Button type='reset' variant={'secondary'}>Cancel</Button>
                    <Button type='submit' className='bg-green-600' disabled={createNoteBook.isPending}>
                        {createNoteBook.isPending && <Loader2 className='w-4 h-4 mr-2 animate-spin'/>}
                        Create
                    </Button>
                </div>
            </form>
        </DialogContent>
    </Dialog>
  )
}

export default CreateNoteDialog