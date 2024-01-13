export function resizeHeightForTextarea(event: any) {
    const element = event && event.target ? event.target : event;
    element.style.height = 'auto';
    element.style.height = element.scrollHeight + 'px';
}