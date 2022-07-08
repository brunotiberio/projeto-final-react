import React from 'react'
import { useForm, useInput } from "lx-react-form";

import { Button, TextField } from '@mui/material'

import { FormContainer } from './style'

export default function EditNews() {


    const title = useInput({
        name: 'title'
    })

    const urlToImage = useInput({
        name: 'urlToImage'
    })

    const description = useInput({
        name: 'description'
    })

    const content = useInput({
        name: 'content'
    })

    const form = useForm({
        clearFields: true,
        formFields: [title, urlToImage, description, content],
        submitCallback: (formData) => {
            console.log(formData)
        }
    })


  return (
    <>
    <FormContainer>
        <form onSubmit={form.handleSubmit}>
            <TextField
                type="text"
                error={title.error && true}
                label="Título da notícia"
                helperText={title.error}
                {...title.inputProps}
            />

            <TextField
                type="link"
                error={urlToImage.error && true}
                label="Imagem da notícia (url)"
                helperText={urlToImage.error}
                {...urlToImage.inputProps}
            />
            

            <TextField
                type="text"
                multiline
                minRows={10}
                maxRows={10}                
                error={description.error && true}
                label="Descrição da notícia"
                helperText={description.error}
                {...description.inputProps}
            />
           

            <TextField
                type="text"
                multiline
                minRows={20}
                maxRows={20}
                error={content.error && true}
                label="Notícia geral"
                helperText={content.error}
                {...content.inputProps}
            />
            

            <Button variant="contained" type="submit"> Criar notícia </Button>
            <Button variant="contained" type="submit"> Voltar </Button>
        </form>
    </FormContainer>
    </>
  )
}


