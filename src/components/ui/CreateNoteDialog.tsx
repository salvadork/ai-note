'use client'
import React from 'react'
import { Dialog, DialogContent ,DialogHeader,DialogTrigger} from './dialog'
import { Plus } from 'lucide-react'

type Props = {}

const CreateNoteDialog = (props: Props) => {
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
                
            </DialogHeader>
        </DialogContent>
    </Dialog>
  )
}

export default CreateNoteDialog