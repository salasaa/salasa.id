"use client";

import React, { useState } from "react";
import {
  Type,
  AlignLeft,
  Hash,
  Trash2,
  Edit2,
  Copy,
  Check,
  X,
  Settings2,
  CheckCircle2,
  Trash,
  AtSign,
} from "lucide-react";

// --- DEFINISI TYPE ---
interface FormField {
  id: string;
  type: string;
  label: string;
  placeholder: string;
  description: string;
  required: boolean;
}

interface FormValues {
  [key: string]: string;
}

export default function FormBuilder() {
  const [fields, setFields] = useState<FormField[]>([
    {
      id: "1",
      type: "Input",
      label: "Nama Pengguna",
      placeholder: "shadcn",
      description: "Ini adalah nama tampilan publik Anda.",
      required: true,
    },
  ]);

  const [activeTab, setActiveTab] = useState("preview");
  const [editingFieldId, setEditingFieldId] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const [formValues, setFormValues] = useState<FormValues>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const componentList = [
    { icon: <Type size={14} />, label: "Input" },
    { icon: <AlignLeft size={14} />, label: "Textarea" },
    { icon: <Hash size={14} />, label: "Number Input" },
    { icon: <AtSign size={14} />, label: "Email" },
  ];

  // FIXED: Logic dipindahkan ke dalam fungsi untuk menghindari error impure render
  const addField = (type: string) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newField: FormField = {
      id,
      type,
      label: `Label ${type}`,
      placeholder: `${type.toLowerCase()}...`,
      description: "",
      required: false,
    };
    setFields([...fields, newField]);
    setEditingFieldId(id);
  };

  const removeField = (id: string) => {
    if (editingFieldId === id) setEditingFieldId(null);
    setFields(fields.filter((f) => f.id !== id));
    const newValues = { ...formValues };
    delete newValues[id];
    setFormValues(newValues);
  };

  const updateField = (
    id: string | null,
    updates: Partial<Omit<FormField, "id" | "type">>,
  ) => {
    if (!id) return;
    setFields(fields.map((f) => (f.id === id ? { ...f, ...updates } : f)));
  };

  const handleInputChange = (id: string, value: string) => {
    setFormValues((prev) => ({ ...prev, [id]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const currentEditingField = fields.find((f) => f.id === editingFieldId);

  // FIXED: Generate real Shadcn/UI code based on current fields
  const generateCode = () => {
    const zodSchemaFields = fields
      .map((f) => {
        const name = f.label.toLowerCase().replace(/\s+/g, "_");
        return `  ${name}: z.string()${f.required ? '.min(1, { message: "Field ini wajib diisi" })' : ""},`;
      })
      .join("\n");

    const defaultValues = fields
      .map((f) => {
        const name = f.label.toLowerCase().replace(/\s+/g, "_");
        return `      ${name}: "",`;
      })
      .join("\n");

    const formFieldsJSX = fields
      .map((f) => {
        const name = f.label.toLowerCase().replace(/\s+/g, "_");
        const inputComp =
          f.type === "Textarea"
            ? `<Textarea placeholder="${f.placeholder}" {...field} />`
            : `<Input type="${f.type === "Number Input" ? "number" : f.type === "Email" ? "email" : "text"}" placeholder="${f.placeholder}" {...field} />`;

        return `        <FormField
          control={form.control}
          name="${name}"
          render={({ field }) => (
            <FormItem>
              <FormLabel>${f.label}</FormLabel>
              <FormControl>
                ${inputComp}
              </FormControl>
              ${f.description ? `<FormDescription>${f.description}</FormDescription>` : ""}
              <FormMessage />
            </FormItem>
          )}
        />`;
      })
      .join("\n");

    return `"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
${zodSchemaFields}
})

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
${defaultValues}
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
${formFieldsJSX}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}`;
  };

  const copyToClipboard = () => {
    const code = generateCode();
    navigator.clipboard.writeText(code).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <div className="flex h-screen dark:invert font-sans overflow-hidden border border-slate-200">
      {/* Sidebar Elemen */}
      <aside className="w-64 border-r border-slate-200 flex flex-col bg-slate-50/50 mt-10">
        <div className="p-4 flex items-center gap-2.5 border-b border-slate-200 bg-white">
          <div className="bg-slate-900 p-1.5 rounded-md text-white shadow-sm">
            <Settings2 size={16} />
          </div>
          <h1 className="font-semibold text-sm tracking-tight text-slate-600 dark:text-slate-400">
            Shadcn Form Builder
          </h1>
        </div>

        <div className="p-4 overflow-y-auto">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
            Fields
          </p>
          <div className="space-y-1.5 font-bold font-sans">
            {componentList.map((item, index) => (
              <button
                key={index}
                onClick={() => addField(item.label)}
                className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-600 hover:bg-white hover:text-slate-900 border border-transparent hover:border-slate-200 rounded-md transition-all group text-left"
              >
                <span className="text-slate-400 group-hover:text-slate-900">
                  {item.icon}
                </span>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* Area Kerja Tengah */}
      <main className="flex-1 flex flex-col overflow-hidden relative bg-slate-50/20 mt-11">
        <header className="h-14 border-b border-slate-200 flex items-center justify-between px-6 bg-white shrink-0">
          <div className="flex items-center gap-4 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            Preview
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-12 flex justify-center items-start">
          <div className="w-full max-w-2xl bg-white border border-slate-200 rounded-xl shadow-sm flex flex-col relative min-h-125">
            {showSuccess && (
              <div className="absolute top-6 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white px-5 py-2.5 rounded-full shadow-2xl flex items-center gap-2.5 text-sm animate-in fade-in slide-in-from-top-4 duration-300">
                <CheckCircle2 size={16} className="text-green-400" />
                Data sent successfully
              </div>
            )}

            <div className="px-6 border-b border-slate-200 flex items-center justify-between bg-white rounded-t-xl">
              <div className="flex gap-6">
                <button
                  onClick={() => setActiveTab("preview")}
                  className={`py-4 text-sm font-medium transition-all relative ${activeTab === "preview" ? "text-slate-900" : "text-slate-400"}`}
                >
                  Preview
                  {activeTab === "preview" && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900"></div>
                  )}
                </button>
                <button
                  onClick={() => setActiveTab("code")}
                  className={`py-4 text-sm font-medium transition-all relative ${activeTab === "code" ? "text-slate-900" : "text-slate-400"}`}
                >
                  Code
                  {activeTab === "code" && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900"></div>
                  )}
                </button>
              </div>
              <button
                onClick={() => {
                  setFields([]);
                  setFormValues({});
                  setEditingFieldId(null);
                }}
                className="text-slate-400 hover:text-red-500 transition-colors"
              >
                <Trash2 size={16} />
              </button>
            </div>

            <div className="flex-col items-start justify-center p-10 w-full">
              {activeTab === "preview" ? (
                <form onSubmit={handleFormSubmit} className="p-10 space-y-8">
                  {fields.length === 0 ? (
                    <div className="py-24 flex flex-col items-center justify-center text-slate-300 border-2 border-dashed border-slate-100 rounded-2xl">
                      <p className="text-sm">Empty</p>
                    </div>
                  ) : (
                    fields.map((field) => (
                      <div
                        key={field.id}
                        className={`group relative p-4 -m-4 rounded-xl transition-all border border-transparent ${editingFieldId === field.id ? "bg-slate-50 border-slate-100" : "hover:bg-slate-50/50"}`}
                      >
                        <div className="absolute -left-12 top-4 flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            type="button"
                            onClick={() => setEditingFieldId(field.id)}
                            className="p-2 bg-white border border-slate-200 rounded-md text-slate-400 hover:text-slate-900 shadow-sm"
                          >
                            <Edit2 size={14} />
                          </button>
                          <button
                            type="button"
                            onClick={() => removeField(field.id)}
                            className="p-2 bg-white border border-slate-200 rounded-md text-slate-500 hover:text-red-600 shadow-sm"
                          >
                            <Trash size={14} />
                          </button>
                        </div>
                        <div className="space-y-3">
                          <label className="text-sm font-semibold text-slate-400">
                            {field.label}{" "}
                            {field.required && (
                              <span className="text-red-500 ml-0.5">*</span>
                            )}
                          </label>
                          {field.type === "Textarea" ? (
                            <textarea
                              value={formValues[field.id] || ""}
                              onChange={(e) =>
                                handleInputChange(field.id, e.target.value)
                              }
                              placeholder={field.placeholder}
                              className="w-full min-h-25 rounded-md border text-slate-800 border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-950 transition-shadow"
                            />
                          ) : (
                            <input
                              type={
                                field.type === "Number Input"
                                  ? "number"
                                  : field.type === "Email"
                                    ? "email"
                                    : "text"
                              }
                              value={formValues[field.id] || ""}
                              onChange={(e) =>
                                handleInputChange(field.id, e.target.value)
                              }
                              placeholder={field.placeholder}
                              className="h-10 w-full rounded-md border text-slate-800 border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-950 transition-shadow"
                            />
                          )}
                          {field.description && (
                            <p className="text-[0.8rem] text-slate-500">
                              {field.description}
                            </p>
                          )}
                        </div>
                      </div>
                    ))
                  )}
                  {fields.length > 0 && (
                    <button
                      type="submit"
                      className="w-full bg-slate-900 text-white rounded-md h-11 text-sm font-bold hover:bg-slate-800 transition-colors mt-4"
                    >
                      Submit
                    </button>
                  )}
                </form>
              ) : (
                <div className="bg-gray-950 dark:bg-gray-900 text-slate-300 p-0 font-mono text-xs h-125 overflow-hidden flex flex-col">
                  <div className="flex justify-between items-center px-6 py-3 border-b border-white/10 bg-white/5 shrink-0">
                    <button
                      onClick={copyToClipboard}
                      className="text-[10px] flex items-center gap-2 hover:bg-white/20 text-white px-3 py-1.5 rounded-md transition-all font-bold "
                    >
                      {isCopied ? (
                        <>
                          <Check size={12} className="text-green-400" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={12} />
                          <span>Copy Code</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="flex-1 overflow-auto p-6 leading-relaxed">
                    <pre>
                      <code>{generateCode()}</code>
                    </pre>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Sidebar Pengaturan Kanan */}
      <aside
        className={`w-80 border-l text-slate-400 border-slate-200 bg-white flex flex-col shadow-2xl transition-transform duration-300 ease-in-out z-20 ${editingFieldId ? "translate-x-0" : "translate-x-full fixed right-0 h-full"}`}
      >
        <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50/50 mt-11">
          <div className="flex items-center gap-2">
            <Settings2 size={14} className="text-slate-900" />
            <h2 className="text-xs font-bold uppercase tracking-widest">
              Settings
            </h2>
          </div>
          <button
            onClick={() => setEditingFieldId(null)}
            className="p-1 hover:bg-slate-200 rounded transition-colors"
          >
            <X size={16} className="text-slate-500" />
          </button>
        </div>

        {currentEditingField && (
          <div className="p-6 space-y-6 overflow-y-auto">
            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase text-slate-400">
                Label
              </label>
              <input
                type="text"
                value={currentEditingField.label}
                onChange={(e) =>
                  updateField(editingFieldId, { label: e.target.value })
                }
                className="w-full h-9 px-3 text-sm border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-950 text-slate-900"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase text-slate-400">
                Placeholder
              </label>
              <input
                type="text"
                value={currentEditingField.placeholder}
                onChange={(e) =>
                  updateField(editingFieldId, { placeholder: e.target.value })
                }
                className="w-full h-9 px-3 text-sm border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-950 text-slate-900"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase text-slate-400">
                Help
              </label>
              <textarea
                value={currentEditingField.description}
                onChange={(e) =>
                  updateField(editingFieldId, { description: e.target.value })
                }
                className="w-full p-3 text-sm border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-950 text-slate-900"
                rows={3}
              />
            </div>
            <div className="pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
                <label className="text-sm font-medium text-slate-700">
                  Required
                </label>
                <input
                  type="checkbox"
                  checked={currentEditingField.required}
                  onChange={(e) =>
                    updateField(editingFieldId, { required: e.target.checked })
                  }
                  className="w-4 h-4 rounded border-slate-300 accent-slate-900"
                />
              </div>
            </div>
            <button
              onClick={() => setEditingFieldId(null)}
              className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-900 text-sm font-bold rounded-md transition-colors"
            >
              Save
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
