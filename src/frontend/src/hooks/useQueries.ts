import { useQuery } from "@tanstack/react-query";
import type { ResourcePageContent, TmuIresPopupContent } from "../backend";
import { useActor } from "./useActor";

// Since the backend no longer provides project/content management,
// this file now only contains hooks for user profile and authentication-related queries.
// Static content is managed directly in the page components.

export function useGetCallerUserProfile() {
  const { actor, isFetching: actorFetching } = useActor();

  const query = useQuery({
    queryKey: ["currentUserProfile"],
    queryFn: async () => {
      if (!actor) throw new Error("Actor not available");
      return actor.getCallerUserProfile();
    },
    enabled: !!actor && !actorFetching,
    retry: false,
  });

  return {
    ...query,
    isLoading: actorFetching || query.isLoading,
    isFetched: !!actor && query.isFetched,
  };
}

export function useGetResourcePageContent() {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<ResourcePageContent>({
    queryKey: ["resourcePageContent"],
    queryFn: async () => {
      if (!actor) throw new Error("Actor not available");
      return actor.getResourcePageContent();
    },
    enabled: !!actor && !actorFetching,
  });
}

export function useGetTmuIresPopupContent() {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<TmuIresPopupContent>({
    queryKey: ["tmuIresPopupContent"],
    queryFn: async () => {
      if (!actor) throw new Error("Actor not available");
      return actor.getTmuIresPopupContent();
    },
    enabled: !!actor && !actorFetching,
  });
}
