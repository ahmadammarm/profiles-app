import React from 'react'

interface ProfileItemBodyProps {
    nama: string,
    nim: string,
    prodi: string
}

const ProfileItemBody: React.FC<ProfileItemBodyProps> = ({
    nama,
    nim,
    prodi
}) => {
  return (
    <div>
        <p>
            Nama : {nama}
        </p>
        <p>
            NIM : {nim}
        </p>
        <p>
            Program Studi : {prodi}
        </p>
    </div>
  )
}

export default ProfileItemBody
