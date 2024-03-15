type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/api/v1/connector_definitions/check_connection-POST': {
        parameters: [
            {
                name: 'type'
            },
            {
                name: 'name'
            },
            {
                name: 'connection_spec'
            },
        ]
    },
    '/api/v1/connector_definitions-GET': {
        parameters: [
            {
                name: 'type'
            },
        ]
    },
    '/api/v1/connector_definitions/{connector_name}-GET': {
        parameters: [
            {
                name: 'connector_name'
            },
            {
                name: 'type'
            },
        ]
    },
    '/api/v1/connectors-POST': {
        parameters: [
            {
                name: 'connector'
            },
        ]
    },
    '/api/v1/connectors/{id}-DELETE': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/api/v1/connectors/{id}/discover-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/api/v1/connectors/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/api/v1/connectors-GET': {
        parameters: [
        ]
    },
    '/api/v1/connectors/{id}/query_source-POST': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'query'
            },
        ]
    },
    '/api/v1/connectors/{id}-PUT': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'connector'
            },
        ]
    },
    '/api/v1/models-POST': {
        parameters: [
            {
                name: 'model'
            },
        ]
    },
    '/api/v1/models/{id}-DELETE': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/api/v1/models/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/api/v1/models-GET': {
        parameters: [
        ]
    },
    '/api/v1/models/{id}-PUT': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'model'
            },
        ]
    },
    '/api/v1/reports-GET': {
        parameters: [
            {
                name: 'type'
            },
            {
                name: 'metric'
            },
            {
                name: 'connector_ids'
            },
            {
                name: 'time_period'
            },
        ]
    },
    '/api/v1/syncs/{sync_id}/sync_runs/{sync_run_id}/sync_records-GET': {
        parameters: [
            {
                name: 'sync_id'
            },
            {
                name: 'sync_run_id'
            },
            {
                name: 'status'
            },
            {
                name: 'page'
            },
        ]
    },
    '/api/v1/syncs/{sync_id}/sync_runs-GET': {
        parameters: [
            {
                name: 'sync_id'
            },
            {
                name: 'status'
            },
            {
                name: 'page'
            },
        ]
    },
    '/api/v1/syncs-POST': {
        parameters: [
            {
                name: 'sync'
            },
        ]
    },
    '/api/v1/syncs/{id}-DELETE': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/api/v1/syncs/configurations-GET': {
        parameters: [
        ]
    },
    '/api/v1/syncs-GET': {
        parameters: [
            {
                name: 'page[number]'
            },
            {
                name: 'page[size]'
            },
        ]
    },
    '/api/v1/syncs/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/api/v1/syncs/{id}-PUT': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'sync'
            },
        ]
    },
}