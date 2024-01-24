import React from 'react'
import { Button } from './ui/button'
import { Trash } from 'lucide-react'

type Props = {
    noteId: number
}

const DeleteButton = (props: Props) => {
  return (
    <Button variant={'destructive'} size={'sm'} onClick={() => {
        const confirm = window.confirm('Are you sure you want to delete?')
    }}>
        <Trash />
    </Button>
  )
}

export default DeleteButton