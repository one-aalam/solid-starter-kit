import { Title } from 'solid-meta'
import IconExclamation from '~icons/heroicons-solid/exclamation'


export default function NotFound() {
    return (
        <section className="page px-8 py-4">
        <Title>Page Not Found!</Title>
        <h1 class="text-4xl font-semibold text-blue-900">
            <IconExclamation class="w-10 h-10 inline-block text-blue-900" />
            404: Not Found
        </h1>
        <hr class="mt-1 mb-4 text-blue-300"/>
        <p>It's gone 😞</p>
      </section>
    );
}
