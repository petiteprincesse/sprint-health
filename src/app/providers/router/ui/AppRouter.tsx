import { FC, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { RouteNames, routes } from "@/app/providers/router/config/routeConfig";
import { Layout } from "@/app/layout/Layout";
import { Spinner } from "@/components/ui/spinner";

const AppRouter: FC = () => {
    return (
        <Suspense fallback={<Spinner size={"large"} fullScreen />}>
            <Routes>
                {routes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={
                            <Layout>
                                <route.component />
                            </Layout>
                        }
                    />
                ))}
                <Route
                    path={RouteNames.NAVIGATE}
                    element={<Navigate replace to={RouteNames.DASHBOARD} />}
                />
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
