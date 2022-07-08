import React from 'react'
import { useForm, useSelect, useInput } from "lx-react-form";


import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'

import { FormContainer } from './style'

export default function CreateNews() {

    const title = useInput({
        name: 'title'
    })

    const category = useSelect({
        name: 'category'
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
        formFields: [title, category, urlToImage, description, content],
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
            

            <FormControl>
                <InputLabel>Categoria</InputLabel>
                <Select {...category.inputProps} label="Categoria">
                    <MenuItem value="leitor">Saúde</MenuItem>
                    <MenuItem value="jornalista">Tecnologia</MenuItem>
                    <MenuItem value="jornalista">Esporte</MenuItem>
                    <MenuItem value="jornalista">Entretenimento</MenuItem>
                    <MenuItem value="jornalista">Gastronomia</MenuItem>
                </Select>
            
            </FormControl>

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
        </form>
    </FormContainer>
    </>
  )
}