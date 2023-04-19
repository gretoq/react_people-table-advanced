import { useParams } from 'react-router-dom';
import { Person } from '../types';
import { PeopleRowInfo } from './PeopleRowInfo';
import { TableHeader } from './TableHeader';

interface Props {
  people: Person[],
}

export const PeopleTable: React.FC<Props> = ({ people }) => {
  const { slug: selectedSlug = '' } = useParams();

  return (
    <table
      data-cy="peopleTable"
      className="table is-striped is-hoverable is-narrow is-fullwidth"
    >
      <TableHeader />

      <tbody>
        {people.map(person => (
          <PeopleRowInfo
            key={person.slug}
            person={person}
            selectedSlug={selectedSlug}
          />
        ))}
      </tbody>
    </table>
  );
};
