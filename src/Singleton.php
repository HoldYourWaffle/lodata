<?php

namespace Flat3\OData;

use Flat3\OData\Controller\Transaction;
use Flat3\OData\Exception\Internal\PathNotHandledException;
use Flat3\OData\Interfaces\PipeInterface;
use Flat3\OData\Interfaces\ServiceInterface;
use Flat3\OData\Traits\HasName;
use Flat3\OData\Traits\HasTitle;

class Singleton extends Entity implements ServiceInterface
{
    use HasName;
    use HasTitle;

    public function __construct(string $name, EntityType $type)
    {
        parent::__construct();
        $this->setName($name);
        $this->setType($type);
    }

    public function getKind(): string
    {
        return 'Singleton';
    }

    public static function pipe(
        Transaction $transaction,
        string $pathComponent,
        ?PipeInterface $argument
    ): ?PipeInterface {
        $model = Model::get();
        $singleton = $model->getResources()->get($pathComponent);

        if (null === $singleton || !$singleton instanceof Singleton) {
            throw new PathNotHandledException();
        }

        return $singleton;
    }
}