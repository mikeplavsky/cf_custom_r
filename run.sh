docker run \
    -ti \
    --rm \
    -v $(pwd):/cf \
    -w /cf  \
    node:5.6.0 \
    node \
    $1 \
    $2 \
    $3 \
    $4
