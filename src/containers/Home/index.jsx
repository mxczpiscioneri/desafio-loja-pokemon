import React, { useEffect } from 'react'
import Alert from '@material-ui/lab/Alert'
import { Container, Snackbar } from '@material-ui/core'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import Gallery from '../../components/Gallery'
import { usePokemon } from '../../hooks/usePokemon'

const Home = () => {
  const {
    loading,
    data,
    error,
    setError,
    paginate,
    getAllPokemon
  } = usePokemon()
  const { type } = useParams()

  useEffect(() => {
    getAllPokemon(type)
  }, [getAllPokemon, type])

  return (
    <>
      <Header />
      <Container>
        {error &&
          <Snackbar
            open={error}
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            autoHideDuration={6000}
            onClose={() => setError(false)}
          >
            <Alert variant="filled" severity="error">
              Ocorreu um erro, tente novamente!
            </Alert>
          </Snackbar>
        }
        <Gallery list={data} loading={loading} paginate={!type && paginate} />
      </Container>
    </>
  )
}

export default Home
