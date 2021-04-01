import React, { useEffect } from 'react'
import { Container } from '@material-ui/core'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import Gallery from '../../components/Gallery'
import { usePokemon } from '../../hooks/usePokemon'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'

const Home = () => {
  const {
    loading,
    data,
    error,
    paginate,
    getAllPokemon
  } = usePokemon()
  const { type } = useParams()

  useEffect(() => {
    getAllPokemon(type)
  }, [getAllPokemon, type])

  useEffect(() => {
    const MySwal = withReactContent(Swal)
    MySwal.fire({
      title: 'Ocorreu um erro, tente novamente!',
      icon: 'error',
      showConfirmButton: false,
      timerProgressBar: true,
      timer: 5000
    })
  }, [error])

  return (
    <>
      <Header />
      <Container>
        <Gallery list={data} loading={loading} paginate={!type && paginate} />
      </Container>
    </>
  )
}

export default Home
