import { Suspense } from "react";
import type { RemoteApp } from "./registry";
import { loadRemoteComponent } from "./loadRemoteComponent";

type Props = {
  app: RemoteApp;
};

export function RemotePageLoader({ app }: Props) {
  const RemoteComponent = loadRemoteComponent(app.remoteKey);

  return (
    <Suspense fallback={<div>Loading {app.title}...</div>}>
      <RemoteComponent />
    </Suspense>
  );
}
