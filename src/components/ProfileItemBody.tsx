import React from 'react'

interface ProfileItemBodyProps {
    nama: string,
    prodi: string
}

const ProfileItemBody: React.FC<ProfileItemBodyProps> = ({
    nama,
    prodi
}) => {
  return (
    <div>
        <p>
            Nama : {nama}
        </p>
        <p>
            Program Studi : {prodi}
        </p>
    </div>
  )
}

export default ProfileItemBody
