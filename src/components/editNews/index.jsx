import React from 'react'
import { useForm, useInput } from "lx-react-form";

import { Button, TextField } from '@mui/material'

import { FormContainer, InputsContainer } from './style'

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
        <h2>Editar notícia</h2>
        <form onSubmit={form.handleSubmit}>
            <InputsContainer>
                <TextField
                    type="text"
                    error={title.error && true}
                    label="Título da notícia"
                    helperText={title.error}
                    {...title.inputProps}
                    style={{width: '100%', marginTop: 20}}
                />

                <TextField
                    type="link"
                    error={urlToImage.error && true}
                    label="Imagem da notícia (url)"
                    helperText={urlToImage.error}
                    {...urlToImage.inputProps}
                    style={{width: '100%', marginTop: 20}}
                />
            </InputsContainer>
            

            <TextField
                type="text"
                multiline
                minRows={5}
                maxRows={10}                
                error={description.error && true}
                label="Descrição da notícia"
                helperText={description.error}
                {...description.inputProps}
                style={{width: '95%', marginTop: 20}}
            />
           

            <TextField
                type="text"
                multiline
                minRows={10}
                maxRows={20}
                error={content.error && true}
                label="Notícia geral"
                helperText={content.error}
                {...content.inputProps}
                style={{width: '95%', marginTop: 20}}
            />
            

            <Button variant="contained" type="submit" style={{width: '95%', marginTop: 20}}> Criar notícia </Button>
            <Button variant="contained" type="submit" style={{width: '95%', marginTop: 20, marginBottom: 20}}> Voltar </Button>
        </form>
    </FormContainer>
    </>
  )
}


