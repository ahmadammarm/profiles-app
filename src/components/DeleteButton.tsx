import React from 'react'
import { Button } from './ui/button'

interface DeleteButtonProps {
    id: number
    onDelete: (id: number) => void
}

const DeleteButton: React.FC<DeleteButtonProps> = ({
    id,
    onDelete
}) => {
  return (
    <div>
        <Button onClick={() => onDelete(id)}>
            Hapus
        </Button>
    </div>
  )
}

export default DeleteButton
