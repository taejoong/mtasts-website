export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let response = await env.ASSETS.fetch(request);

    if (response.status === 404) {
      if (url.pathname.endsWith('/')) {
        const indexUrl = new URL(url.pathname + 'index.html' + url.search, url.origin);
        const indexRequest = new Request(indexUrl.toString(), request);
        const indexResponse = await env.ASSETS.fetch(indexRequest);
        if (indexResponse.status !== 404) {
          return indexResponse;
        }
      }

      if (!url.pathname.includes('.') && !url.pathname.endsWith('/')) {
        const htmlUrl = new URL(url.pathname + '.html' + url.search, url.origin);
        const htmlRequest = new Request(htmlUrl.toString(), request);
        const htmlResponse = await env.ASSETS.fetch(htmlRequest);
        if (htmlResponse.status !== 404) {
          return htmlResponse;
        }
      }

      const notFoundUrl = new URL('/404.html', url.origin);
      const notFoundRequest = new Request(notFoundUrl.toString(), request);
      const notFoundResponse = await env.ASSETS.fetch(notFoundRequest);
      if (notFoundResponse.status !== 404) {
        return new Response(notFoundResponse.body, {
          status: 404,
          headers: new Headers(notFoundResponse.headers),
        });
      }
    }

    return response;
  },
};
