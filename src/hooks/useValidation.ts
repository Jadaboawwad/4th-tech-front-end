import { validateImage } from 'image-validator'
import { useState } from 'react'

export const useValidation = (data?: DataItem) => {
  const [imagUrl, setImageUrl] = useState<string | undefined>(data?.imageUrl)

  const handleValidation = (data: DataItem) => {
    validateImage(data.imageUrl).then((result) =>
      result ? setImageUrl(data.imageUrl) : setImageUrl('images/404.png')
    )
  }

    if(data){

      handleValidation(data)
    }

  return { handleValidation, imagUrl }
}
