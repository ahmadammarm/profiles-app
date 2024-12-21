import React from 'react'
import ProfileItemHeader from './ProfileItemHeader'
import ProfileItemBody from './ProfileItemBody'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'

interface ProfileItemProps {
    nama: string,
    prodi: string
}

const ProfileItem: React.FC<ProfileItemProps> = ({
    nama,
    prodi
}) => {
  return (
    <div className="p-5">
        <Card className="py-4 flex items-center justify-center">
            <CardContent>
                <ProfileItemHeader nama={nama}/>
                <ProfileItemBody nama={nama}  prodi={prodi} />
                <Button className="mt-5">
                    Lihat Detail
                </Button>
            </CardContent>
        </Card>
    </div>
  )
}

export default ProfileItem
