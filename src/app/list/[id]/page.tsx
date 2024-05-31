export default async function ListsPage({
  params: { id },
}: {
  params: { id: string }
}) {
  return (
    <div>
      <h1>List {id} Page</h1>
    </div>
  )
}
