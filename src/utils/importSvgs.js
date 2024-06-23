export function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const svgs = importAll(require.context('@/assets/svgs', false, /\.svg$/));
export default svgs;