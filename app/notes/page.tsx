// import {
//   dehydrate,
//   HydrationBoundary,
//   QueryClient,
// } from "@tanstack/react-query";
// import NotesClient from "./filter/[...slug]/Notes.client";
// import { fetchNotes } from "@/lib/api";

// const NotesPage = async () => {
//   const queryClient = new QueryClient();
//   await queryClient.prefetchQuery({
//     queryKey: ["notes"],
//   queryFn: () => fetchNotes({ page: 1, search: "" }),
//   });

//   const dehydratedState = dehydrate(queryClient);

//   return (
//     <HydrationBoundary state={dehydratedState}>
//       <NotesClient />
//     </HydrationBoundary>
//   );
// };

// export default NotesPage;