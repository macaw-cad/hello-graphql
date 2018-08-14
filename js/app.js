
function fetchQuery(
    operation,
    variables,
) {
    return fetch('/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: operation.text,
            variables,
        }),
    }).then(response => {
        return response.json();
    });
}

const modernEnvironment = new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource()),
});


ReactDOM.render(
    <QueryRenderer
        environment={modernEnvironment}
        query={graphql`
        query appQuery {
          name
        }
      `}
        variables={{}}
        render={({ error, props }) => {
            console.log(props);
            return <div>Loading</div>;
        }}
    />,
    document.getElementById('root')
);