<?php

namespace Flat3\OData;

use Flat3\OData\Helper\ObjectArray;
use Flat3\OData\Interfaces\NamedInterface;
use Flat3\OData\Interfaces\ResourceInterface;
use Flat3\OData\Interfaces\ServiceInterface;
use Illuminate\Contracts\Container\BindingResolutionException;
use RuntimeException;

class Model
{
    /** @var ObjectArray $resources */
    protected $model;

    public function __construct()
    {
        $this->model = new ObjectArray();
    }

    public static function get(): self
    {
        try {
            return app()->make(self::class);
        } catch (BindingResolutionException $e) {
            throw new RuntimeException($e->getMessage());
        }
    }

    public static function add(NamedInterface $item): self
    {
        $model = self::get();
        $model->model->add($item);
        return $model;
    }

    public static function fn($name): FunctionOperation
    {
        $model = self::get();

        $fn = new FunctionOperation($name);

        $model->model[] = $fn;
        return $fn;
    }

    public static function action($name): ActionOperation
    {
        $model = self::get();

        $action = new ActionOperation($name);

        $model->model[] = $action;
        return $action;
    }

    public static function entitytype($name): EntityType
    {
        $model = self::get();

        $type = new EntityType($name);

        $model->model[] = $type;
        return $type;
    }

    public static function getType($name): EntityType
    {
        $model = self::get();

        return $model->getEntityTypes()->get($name);
    }

    public static function getResource($name): NamedInterface
    {
        $model = self::get();

        return $model->getResources()->get($name);
    }

    public function getNamespace(): string
    {
        return config('odata.namespace') ?: 'com.example.odata';
    }

    public function getEntityTypes(): ObjectArray
    {
        return $this->model->sliceByClass(EntityType::class);
    }

    public function getResources(): ObjectArray
    {
        return $this->model->sliceByClass(ResourceInterface::class);
    }

    public function getServices(): ObjectArray
    {
        return $this->model->sliceByClass(ServiceInterface::class);
    }
}