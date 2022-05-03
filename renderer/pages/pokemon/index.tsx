import Layout from '@components/Layout';
import { Title } from '@schoolmouv/react-kit';
import { initializeStore, removeUndefined } from '@store/index';
import {
  getPokemonByName,
  getPokemonList,
  getRunningOperationPromises,
  useGetPokemonByNameQuery,
  useGetPokemonListQuery,
} from '@store/api/pokemonApi';
import { useAppSelector } from '@store/hooks';
import { useState } from 'react';

const PokemonPage = ({ initialPokemon }) => {
  const { data: pokemonList } = useAppSelector(getPokemonList.select());
  const [pokemon, setPokemon] = useState(initialPokemon);

  const { data: currentPokemon } = useGetPokemonByNameQuery(pokemon);

  return (
    <Layout>
      <h1>Hi</h1>
      <h2>
        You caught {pokemon}! They can have one of these abilities:{' '}
        {currentPokemon.abilities.map((ab) => ab.ability.name).join(', ')}
      </h2>
      <p>
        Catch another!
        <select
          value={pokemon}
          onChange={(e) => setPokemon(e.currentTarget.value)}
        >
          {pokemonList.results.map((pok) => (
            <option>{pok.name}</option>
          ))}
        </select>
      </p>
    </Layout>
  );
};
export async function getServerSideProps() {
  const store = initializeStore({});
  await store.dispatch(getPokemonList.initiate());
  const { data: pokemonList } = getPokemonList.select()(store.getState());
  const initialPokemon = pokemonList.results[0].name;

  await store.dispatch(getPokemonByName.initiate(initialPokemon));

  // queryRef.unsubscribe() // I am not sure if something like this is necessary

  return {
    props: {
      initialReduxState: removeUndefined(store.getState()),
      initialPokemon,
    },
  };
}
export default PokemonPage;
