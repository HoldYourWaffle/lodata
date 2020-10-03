<?php

namespace Flat3\OData\Interfaces\QueryOptions;

use Flat3\OData\Expression\Event;

interface FilterInterface
{
    /**
     * Handle a discovered expression symbol in the filter query
     *
     * @param  Event  $event
     *
     * @return bool True if the event was handled
     */
    public function filter(Event $event): ?bool;
}