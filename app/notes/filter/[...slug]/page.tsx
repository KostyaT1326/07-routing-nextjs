import NotesClient from './Notes.client';

type Props = { params: { slug: string[] } };

const NotesByTag = async ({ params }: Props) => {
  const resolvedParams = await params;
  const tag = resolvedParams.slug[0] === 'all' ? undefined : resolvedParams.slug[0];
  return <NotesClient tag={tag} />;
};

export default NotesByTag;