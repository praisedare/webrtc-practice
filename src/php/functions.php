<?php
    function vite_asset(string $filename): string {
        $manifest = json_decode(file_get_contents(__DIR__.'/../../build/manifest.json'));
        return '/build/' . $manifest->{$filename}->file;
    }

    /**
     * Gets the queries in a url
     * ```php
     * getUrlQueries('http://google.com?q=the+breadwinners') // -> ['q' => 'the+breadwinners']
     * ```
     */
    function getUrlQueries(?string $url = null)
    {
        $url ??= $_SERVER['REQUEST_URI'] . '?' . $_SERVER['QUERY_STRING'];
        $parts = explode('?', $url);

        if (! isset($parts[1]))
            return new \stdClass;

        $search = urldecode($parts[1]);
        $search = explode('&', $search);

        $queries = [];

        foreach ($search as $param) {
            list($name, $val) = explode('=', $param);

            // handle arrays
            if (preg_match('/(\w+(-\w+)*)\[(\d*)\]/', $name, $match)) {
                $name = $match[1];
                $key = @$match[3];

                if (! is_array(@$queries[$name]) )
                    $queries[$name] = [];

                if ($key)
                    $queries[$name][$key] = urldecode($val);
                else
                    $queries[$name][] = urldecode($val);

            } else {

                $queries[$name] = $val;

            }
        }

        return (object) $queries;
    }

