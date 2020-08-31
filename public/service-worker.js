self.addEventListener('install', async event => {
    console.log('V1 installing…');
});

self.addEventListener('activate', event => {
    console.log('V1 now ready to handle fetches!');
});

self.addEventListener('fetch', event => {
    if (event.request.url === 'https://newsapi.org/v2/top-headlines?country=id&apiKey=73b25b0748614b89b24dc491c8081185') {
        if (!navigator.onLine) {
            console.log('offline...');
            event.respondWith(async function() {
                var fallbackResponse = {
                    message: 'haiiii...'
                };

                return new Response(JSON.stringify(fallbackResponse), {
                    headers: {'Content-Type': 'application/json'}
                });
            }());
        }
    }
});