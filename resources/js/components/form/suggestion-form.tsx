import { useForm } from '@tanstack/react-form';
import * as React from 'react';
import { toast } from 'sonner';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    InputGroupTextarea,
} from '@/components/ui/input-group';

const formSchema = z.object({
    fullName: z
        .string()
        .min(3, 'Bug title must be at least 3 characters.')
        .max(100, 'Bug title must be at most 100 characters.'),
    email: z
        .string()
        .trim()
        .refine(
            (val) => val === '' || z.string().email().safeParse(val).success,
            { message: 'Please enter a valid email address' },
        ),
    description: z
        .string()
        .min(20, 'Description must be at least 20 characters.')
        .max(100, 'Description must be at most 100 characters.'),
});

const SuggestionsForm = () => {
    const form = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            description: '',
        },
        validators: {
            onSubmit: formSchema,
        },
        onSubmit: async ({ value }) => {
            toast('You submitted the following values:', {
                description: (
                    <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
                        <code>{JSON.stringify(value, null, 2)}</code>
                    </pre>
                ),
                position: 'bottom-right',
                classNames: {
                    content: 'flex flex-col gap-2',
                },
                style: {
                    '--border-radius': 'calc(var(--radius)  + 4px)',
                } as React.CSSProperties,
            });
        },
    });

    return (
        <Card className="w-full border-none">
            <CardHeader>
                <CardTitle>🚀 Found an error or have a suggestion?</CardTitle>
                <CardDescription>
                    Your feedback helps us keep our MCQs accurate and
                    up-to-date.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form
                    id="bug-report-form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        form.handleSubmit();
                    }}
                >
                    <FieldGroup>
                        <form.Field
                            name="fullName"
                            children={(field) => {
                                const isInvalid =
                                    field.state.meta.isTouched &&
                                    !field.state.meta.isValid;
                                return (
                                    <Field data-invalid={isInvalid}>
                                        <FieldLabel htmlFor={field.name}>
                                            Full Name
                                        </FieldLabel>
                                        <Input
                                            id={field.name}
                                            name={field.name}
                                            value={field.state.value}
                                            onBlur={field.handleBlur}
                                            onChange={(e) =>
                                                field.handleChange(
                                                    e.target.value,
                                                )
                                            }
                                            aria-invalid={isInvalid}
                                            placeholder="Your full name"
                                            autoComplete="off"
                                        />
                                        {isInvalid && (
                                            <FieldError
                                                errors={field.state.meta.errors}
                                            />
                                        )}
                                    </Field>
                                );
                            }}
                        />
                        <form.Field
                            name="email"
                            children={(field) => {
                                const isInvalid =
                                    field.state.meta.isTouched &&
                                    !field.state.meta.isValid;
                                return (
                                    <Field data-invalid={isInvalid}>
                                        <FieldLabel htmlFor={field.name}>
                                            E-Mail
                                        </FieldLabel>
                                        <Input
                                            id={field.name}
                                            name={field.name}
                                            value={field.state.value}
                                            onBlur={field.handleBlur}
                                            onChange={(e) =>
                                                field.handleChange(
                                                    e.target.value,
                                                )
                                            }
                                            aria-invalid={isInvalid}
                                            placeholder="Your email address"
                                            autoComplete="off"
                                        />
                                        {isInvalid && (
                                            <FieldError
                                                errors={field.state.meta.errors}
                                            />
                                        )}
                                    </Field>
                                );
                            }}
                        />
                        <form.Field
                            name="description"
                            children={(field) => {
                                const isInvalid =
                                    field.state.meta.isTouched &&
                                    !field.state.meta.isValid;
                                return (
                                    <Field data-invalid={isInvalid}>
                                        <FieldLabel htmlFor={field.name}>
                                            Description
                                        </FieldLabel>
                                        <InputGroup>
                                            <InputGroupTextarea
                                                id={field.name}
                                                name={field.name}
                                                value={field.state.value}
                                                onBlur={field.handleBlur}
                                                onChange={(e) =>
                                                    field.handleChange(
                                                        e.target.value,
                                                    )
                                                }
                                                placeholder="Describe the issue clearly. Mention the incorrect option, explanation, or outdated content."
                                                rows={6}
                                                className="min-h-24 resize-none"
                                                aria-invalid={isInvalid}
                                            />
                                            <InputGroupAddon align="block-end">
                                                <InputGroupText className="tabular-nums">
                                                    {field.state.value.length}
                                                    /100 characters
                                                </InputGroupText>
                                            </InputGroupAddon>
                                        </InputGroup>
                                        <FieldDescription>
                                            Tell us what seems wrong or how we
                                            can improve this question.
                                        </FieldDescription>
                                        {isInvalid && (
                                            <FieldError
                                                errors={field.state.meta.errors}
                                            />
                                        )}
                                    </Field>
                                );
                            }}
                        />
                    </FieldGroup>
                </form>
            </CardContent>
            <CardFooter>
                <Field orientation="horizontal">
                    <Button
                        type="button"
                        variant="ghost"
                        onClick={() => form.reset()}
                    >
                        Cancel
                    </Button>
                    <Button type="submit" form="bug-report-form">
                        Send Feedback
                    </Button>
                </Field>
            </CardFooter>
        </Card>
    );
};

export default SuggestionsForm;
