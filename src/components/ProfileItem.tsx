import React from 'react'
import ProfileItemHeader from './ProfileItemHeader'
import ProfileItemBody from './ProfileItemBody'
import { Card, CardContent } from './ui/card'
import DeleteButton from './DeleteButton'

interface ProfileItemProps {
    id: number,
    nama: string,
    prodi: string,
    onDelete: (id: number) => void
}

const ProfileItem: React.FC<ProfileItemProps> = ({
    id,
    nama,
    prodi,
    onDelete
}) => {
  return (
    <div className="p-5">
        <Card className="py-4 flex items-center justify-center">
            <CardContent>
                <ProfileItemHeader nama={nama}/>
                <ProfileItemBody nama={nama}  prodi={prodi} />
                <DeleteButton id={id} onDelete={onDelete} />
            </CardContent>
        </Card>
    </div>
  )
}

export default ProfileItem
